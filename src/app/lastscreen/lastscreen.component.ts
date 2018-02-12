import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IYelpBusinessDetailResponse } from '../interfaces/yelp';
import { YelpService } from '../services/yelp.service';
import { IJourney } from '../interfaces/journeys';
import { JourneysService } from '../services/journeys.service';
import { ITask } from '../interfaces/task';

@Component({
  selector: 'app-lastscreen',
  templateUrl: './lastscreen.component.html',
  styleUrls: ['./lastscreen.component.css']
})
export class LastscreenComponent implements OnInit {

  selectedJourney: IJourney;
  taskDetails: IYelpBusinessDetailResponse;
  checked1: boolean = false;
  name: string;
  
  constructor(private _route: ActivatedRoute, private _router: Router, 
    private _yelpService: YelpService, private _pathService: JourneysService) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.getDetail(params.challenge);
      this.name = params.journey;
    });
  }

  getDetail(id: string) {
    this._yelpService.getBusinessDetail(id).subscribe((detail: IYelpBusinessDetailResponse) => {
      this.taskDetails = detail;
      this.checked1 = true;
    });
  }
}
