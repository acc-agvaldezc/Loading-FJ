import { Component } from '@angular/core';
import { YelpService } from './services/yelp.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IYelpBusiness, IYelpResponse, IYelpBusinessRegion } from './interfaces/yelp';
import { IYelpReview } from './interfaces/yelp';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ViewChild } from '@angular/core/src/metadata/di';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private yelpService: YelpService){
  }
  
  ngOnInit(): void{

  }
}
