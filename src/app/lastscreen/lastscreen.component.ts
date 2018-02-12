import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IYelpBusinessDetailResponse, IYelpReview } from '../interfaces/yelp';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-lastscreen',
  templateUrl: './lastscreen.component.html',
  styleUrls: ['./lastscreen.component.css']
})
export class LastscreenComponent implements OnInit {

  taskDetails: IYelpBusinessDetailResponse;
  taskReview: IYelpReview;
  checked1: boolean = false;
  checked2: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _yelpService: YelpService) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.getDetail(params.challenge);
    });
  }

  getDetail(id: string) {
    this._yelpService.getBusinessDetail(id).subscribe((detail: IYelpBusinessDetailResponse) => {
      this.taskDetails = detail;
      console.log(this.taskDetails);
      this.checked1 = true;
    });

    this._yelpService.getBusinessDetailReviews(id).subscribe((review: IYelpReview) => {
      this.taskReview = review;
      console.log(this.taskReview);
      this.checked2 = true;
    });
  }
}
