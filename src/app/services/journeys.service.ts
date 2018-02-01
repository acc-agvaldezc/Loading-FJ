import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IJourney } from '../interfaces/journeys';

@Injectable()
export class JourneysService {

  //private _journeyUrl = 'https://api.myjson.com/bins/i6ra5'; // Prueba con 2 elementos
  private _journeyUrl = 'https://api.myjson.com/bins/qbqcl'; // Prueba con 5 elementos

  constructor(private _client: HttpClient) { }

  getJourneys(): Observable<IJourney[]> {
    return this._client.get(this._journeyUrl)
      //.do(data => console.log('Data: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err);
  }
}
