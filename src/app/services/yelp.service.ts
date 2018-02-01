import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http'
import { HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IYelpResponse, IYelpBusinessDetailResponse, IYelpReview } from "../interfaces/yelp";
import { text } from "@angular/core/src/render3/instructions";

@Injectable()
export class YelpService {

    //Url Search, returns businesses based on the search
    private _yelpSearchApi: string = "https://api.yelp.com/v3/businesses/search";
    //Get detailed information and reviews 
    private _yelpDetailApi: string = "https://api.yelp.com/v3/businesses/";

    private _yelpApiKey: string = 'Bearer -5rE74xo-N9XAff6kCZpWGp3rEkSgqpPqMi0TaP3qGkqNvzlWGz0jAjnq5Oal6i6lDaygXDnZyYzh3KYegualGVa4faFnKVzR64SAQTiOhuiOLz9XbCYuZPRmK5wWnYx';

    private header: HttpHeaders = new HttpHeaders()
        .append('Authorization', this._yelpApiKey)
        .append('Access-Control-Allow-Origin', '*')
        .append('Content-Type', 'text/xml');

    private _proxyUrl: string = 'http://cors-anywhere.herokuapp.com/'

    //Specific API permissions

    //Constructor
    constructor(private _http: HttpClient) {
        console.log(this.header);
    }

    //Search restaurants by latitud
    searchRestaurants(term: string, latitude: number, longitude: number): Observable<IYelpResponse> {

        //Parameters delcarations <''+ = Parse to String> 
        let params = new HttpParams();
        params = params.append('term', term);
        params = params.append('latitude', `${latitude}`);
        params = params.append('longitude', `${longitude}`);

        //return restaurants results
        return this._http.get(`${this._proxyUrl}${this._yelpSearchApi}`, { headers: this.header, params: params })
            .do(resp => console.log(resp))
            .catch(this.handleError);
    }

    //get Business detail
    getBusinessDetail(idBusiness: string): Observable<IYelpBusinessDetailResponse> {
        return this._http.get(`${this._proxyUrl}${this._yelpDetailApi}/${idBusiness}`, { headers: this.header }).catch(this.handleError);
    }
    //get Business reviews
    getBusinessDetailReviews(idBusiness: string): Observable<IYelpReview> {
        return this._http.get(`${this._proxyUrl}${this._yelpDetailApi}/${idBusiness}/reviews`, { headers: this.header }).catch(this.handleError);
    }

    //HandleError method 
    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}
