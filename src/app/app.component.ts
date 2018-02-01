import { Component } from '@angular/core';
import { YelpService } from './services/yelp.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IYelpBusiness, IYelpResponse, IYelpBusinessRegion } from './interfaces/yelp';
import { IYelpReview } from './interfaces/yelp';

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

  constructor(private yelpService: YelpService) { }

  ngOnInit(): void {
    this.yelpService.getBusinessDetail("yama-to-no-title").subscribe(data => {
      console.log(data.review_count);
    });
    this.yelpService.getBusinessDetailReviews('yama-to-no-title').subscribe(data => {
      console.log(data.reviews)
    })
    this.yelpService.searchRestaurants('Japanese', 25.669996, -100.3800037).subscribe(data => {
      this.businesses = data.businesses
      this.businessesRegion = data.region
      console.log(this.businesses, this.businessesRegion)
    });
  }
}
