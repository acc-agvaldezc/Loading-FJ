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
  businesses: IYelpBusiness[];
  businessesRegion: IYelpBusinessRegion[];
  reviews: IYelpReview[];

  //GoogleMaps information  by property binding
  mapLat: number;
  maplng: number;
  mapName: string;
  
  constructor(private yelpService: YelpService){
  }
  
  ngOnInit(): void{
    this.yelpService.getBusinessDetail("yama-to-no-title").subscribe(data =>{
      this.mapLat = data.coordinates["latitude"];
      this.maplng = data.coordinates["longitude"];
      this.mapName = data.name;
    });
    this.yelpService.getBusinessDetailReviews('yama-to-no-title').subscribe(data =>{
      console.log(data.reviews)
    })
    this.yelpService.searchRestaurants('American', 37.786882, -122.399972).subscribe(data =>{
      this.businesses = data.businesses
      this.businessesRegion = data.region
    });
  }
}
