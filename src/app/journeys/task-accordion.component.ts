import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JourneysService } from '../services/journeys.service';
import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { ITask } from '../interfaces/task';
import { IYelpBusinessDetailResponse, IYelpBusiness, IYelpReview } from '../interfaces/yelp';
import { YelpService } from '../services/yelp.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-journey-task',
  templateUrl: './task-accordion.component.html',
  styleUrls: ['./task-accordion.component.css']
})

export class TaskAccordionComponent implements OnInit{

  selectedJourney: IJourney;
  tasks: ITask[];
  userJourneys: IUserJourneys;
  journeys: IJourney[];
  taskDetails: IYelpBusinessDetailResponse;
  taskReview: IYelpReview;
  current: string;
  checked1: boolean = false;
  checked2: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _pathService: JourneysService, private _yelpService: YelpService) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.getJourney(params.name);
    });
    this._pathService.getUserJourneys().subscribe((userJourneys: IUserJourneys) => {
      this.userJourneys = userJourneys;
      this.journeys = userJourneys.journeys;
      this.current = userJourneys.currentJourney;
    });
  }

  getJourney(name: string) {
    this.selectedJourney = this._pathService.getJourney(name)
    this.tasks = this.selectedJourney.tasks;
  }

  getDetail(id: string) {
    this._yelpService.getBusinessDetail(id).subscribe((detail: IYelpBusinessDetailResponse) => {
      this.taskDetails = detail;
      this.checked1 = true;
    });

    this._yelpService.getBusinessDetailReviews(id).subscribe((review: IYelpReview) => {
      this.taskReview = review;
      this.checked2 = true;
    });
  }
}
