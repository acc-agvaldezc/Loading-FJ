import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay'

import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { AuthService } from './auth.service';
import { YelpService } from './yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { IBaseJourneys, newJourneys } from '../interfaces/baseJourneys';
import { ITask } from '../interfaces/task';
import { IYelpResponse } from '../interfaces/yelp';
import { forEach } from '@angular/router/src/utils/collection';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class JourneysService {
  
  private _userJourneys: IUserJourneys;

  //Subjects
  private subjectUserJourneys: Subject<IUserJourneys> = new Subject<IUserJourneys>();
  private updateUserJourneys: Observable<IUserJourneys> = this.subjectUserJourneys.asObservable().publishReplay().refCount()

  constructor(private _client: HttpClient, private _authService: AuthService, private _yelpService: YelpService) { }

  getUserJourneys(): Observable<IUserJourneys> {
    
    //If userJourneys already loaded
    if (this._userJourneys) {
      console.log('User journeys loaded on cache.');
      return this.updateUserJourneys;
    }
    
    //Load userJourneys for first time after login
    let user = this._authService.getUser();
    let userJourneys: IUserJourneys;
    this.createJourneys(user.username)
    return this.updateUserJourneys
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err);
  }

  private createJourneys(username: string): void {
    let journeys: IBaseJourneys = newJourneys;
    let observables = [];

    for (let journey of Object.values(journeys)) {
      observables.push(this._yelpService.searchRestaurants(journey.name, 37.767413217936834, -122.42820739746094, 10));
    }

    let fork: Subscription = forkJoin(observables)
      .subscribe((res: IYelpResponse[]) => {
          let journeyNames = Object.keys(journeys);
          let journeysArray: IJourney[] = [];

          for (let index in res) {
            let tasks: ITask[] = [];

            for (let business of res[index].businesses) {
              tasks.push({
                name: business.name,
                completed: false,
                taskData: business,
                isCurrentTask: false
              });
            }

            journeys[journeyNames[index]].tasks = tasks;
            journeysArray.push(journeys[journeyNames[index]]);
          }

          this._userJourneys = {
            username: username,
            journeys: journeysArray,
            currentJourney: ''
          }
          this.subjectUserJourneys.next(this._userJourneys)
          // localStorage.setItem(`${username}Journeys`, JSON.stringify(this._userJourneys));
          // console.log(this._userJourneys);
        },
        () => fork.unsubscribe()
      );

    return;
  }

  getJourney(id: string): IJourney {
    let j: IUserJourneys;
    let path: IJourney;

    this.getUserJourneys().subscribe((userJourneys: IUserJourneys) => {
      userJourneys.journeys.map(paths => {
        if(paths.name === id){
          console.log("si soy igual nigga");
          path = paths;
          return path;
        }
      });
    })
    return path
  }

  updateFollow(username: string, journeys: IJourney[], name: string): void {
    this._userJourneys = {
      username: username,
      journeys: journeys,
      currentJourney: name
    }

    console.log(this._userJourneys);
    localStorage.setItem(`${username}Journeys`, JSON.stringify(this._userJourneys));
  }

  unfollow(username: string, journeys: IJourney[]): void {
    this._userJourneys = {
      username: username,
      journeys: journeys,
      currentJourney: ''
    }

    console.log(this._userJourneys);
    localStorage.setItem(`${username}Journeys`, JSON.stringify(this._userJourneys));
  }
}
