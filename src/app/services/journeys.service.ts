import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

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
  private _journeyUrl = 'https://api.myjson.com/bins/qbqcl'; // Prueba con 5 elementos
  private _userJourneys: IUserJourneys;

  constructor(private _client: HttpClient, private _authService: AuthService, private _yelpService: YelpService) {}

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
      this._userJourneys = {
        username: user.username,
        journeys:  this.createJourneys()
      }

      localStorage.setItem(`${user.username}Journeys`, JSON.stringify(this._userJourneys));
      return this._userJourneys;
    }
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err);
  }

  private createJourneys(): IJourney[] {
    let journeys: IBaseJourneys = newJourneys;
    journeys.baseAmericanJourney.tasks = this.createTasks(journeys.baseAmericanJourney.name)
    journeys.baseJapaneseJourney.tasks = this.createTasks(journeys.baseJapaneseJourney.name)
    journeys.baseKoreanJourney.tasks = this.createTasks(journeys.baseKoreanJourney.name)
    journeys.baseMexicanJourney.tasks = this.createTasks(journeys.baseMexicanJourney.name)
    journeys.baseItalianJourney.tasks = this.createTasks(journeys.baseItalianJourney.name)

    return [
      journeys.baseAmericanJourney,
      journeys.baseItalianJourney,
      journeys.baseJapaneseJourney,
      journeys.baseKoreanJourney,
      journeys.baseMexicanJourney
    ]
  }

  private createTasks(journey: string): ITask[] {

    let tasks : ITask[] = [];

    let subscription: Subscription = this._yelpService.searchRestaurants(journey, 37.767413217936834, -122.42820739746094, 10)
      .subscribe(res => {
        for(let business of res.businesses) {
          tasks.push({
            name: business.name,
            completed: false,
            taskData: business,
            isCurrentTask: false
          });
        }
      },
      error => console.log(<any>error),
      () => subscription.unsubscribe()
    );

    return tasks;
  }
}
