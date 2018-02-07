import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http'
import { HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IYelpResponse, IYelpBusinessDetailResponse, IYelpReview } from "../interfaces/yelp";

@Injectable()
export class YelpService {

    //Url Search, returns businesses based on the search
    private _yelpSearchApi: string = "https://api.yelp.com/v3/businesses/search";
    //Get detailed information and reviews 
    private _yelpDetailApi: string = "https://api.yelp.com/v3/businesses/";

    private _yelpApiKey: string = 'Bearer -5rE74xo-N9XAff6kCZpWGp3rEkSgqpPqMi0TaP3qGkqNvzlWGz0jAjnq5Oal6i6lDaygXDnZyYzh3KYegualGVa4faFnKVzR64SAQTiOhuiOLz9XbCYuZPRmK5wWnYx';

    private header: HttpHeaders = new HttpHeaders()
        .set('Authorization', this._yelpApiKey)
        .set('Access-Control-Allow-Origin', '*')
        .set('Content-Type', 'text/xml');

    private _proxyUrl: string = 'https://cors-anywhere.herokuapp.com/'

    //Constructor
    constructor(private _http: HttpClient) {}

    //Search restaurants by latitud
    searchRestaurants(term: string, latitude: number, longitude: number, limit?: number): Observable<IYelpResponse> {

        //Parameters delcarations <''+ = Parse to String> 
        let params = new HttpParams();
        params = params.append('term', term);
        params = params.append('latitude', `${latitude}`);
        params = params.append('longitude', `${longitude}`);

        if (limit) {
            params = params.append('limit', `${limit}`);
        }

        //return restaurants results
        return this._http.get(`${this._proxyUrl}${this._yelpSearchApi}`, { headers: this.header, params: params })
            .catch(this.handleError);
    }

    //get Business detail
    getBusinessDetail(idBusiness: string): Observable<IYelpBusinessDetailResponse> {
        return this._http.get(`${this._proxyUrl}${this._yelpDetailApi}${idBusiness}`, { headers: this.header }).catch(this.handleError);
    }
    //get Business reviews
    getBusinessDetailReviews(idBusiness: string): Observable<IYelpReview> {
        return this._http.get(`${this._proxyUrl}${this._yelpDetailApi}${idBusiness}/reviews`, { headers: this.header }).catch(this.handleError);
    }

    //HandleError method 
    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}
