import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';

import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { AuthService } from './auth.service';
import { YelpService } from './yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { IBaseJourneys, newJourneys } from '../interfaces/baseJourneys';
import { ITask } from '../interfaces/task';
import { IYelpResponse } from '../interfaces/yelp';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class JourneysService {
  
  //private _journeyUrl = 'https://api.myjson.com/bins/i6ra5'; // Prueba con 2 elementos
  //private _journeyUrl = 'https://api.myjson.com/bins/qbqcl'; // Prueba con 5 elementos
  private _userJourneys: IUserJourneys;

  constructor(private _client: HttpClient, private _authService: AuthService, private _yelpService: YelpService) { }

  getUserJourneys(): IUserJourneys {
    
    //If userJourneys already loaded
    if (this._userJourneys) {
      console.log('User journeys loaded on cache.');
      return this._userJourneys;
    }

    //Load userJourneys for first time after login
    let user = this._authService.getUser();
    let userJourneys: IUserJourneys;

    //User already logged in and has journeys created
    if (userJourneys = JSON.parse(localStorage.getItem(`${user.username}Journeys`))) {
      console.log('User journeys loaded for first time in session. Retreaving journeys data.')
      this._userJourneys = userJourneys;
      return this._userJourneys;
    } else {
      
      //User logged in for first time on system
      console.log('User logged in for first time on system. Creating journeys data.');

      this.createJourneys(user.username);

      return this._userJourneys;
    }
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
            journeys: journeysArray
          }

          localStorage.setItem(`${username}Journeys`, JSON.stringify(this._userJourneys));
          console.log(this._userJourneys);
        },
        () => fork.unsubscribe()
      );

    return;
  }

  getJourney(id: string): IJourney {
    let j: IUserJourneys;
    let path: IJourney;
    j = this.getUserJourneys();
    j.journeys.map(data => {
      if(data.name === id) {
        path = data;
      }
    });
    //console.log(path);
    return path;
  }
}
