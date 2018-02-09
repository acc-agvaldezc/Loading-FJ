import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { IYelpResponse } from '../interfaces/yelp';
//import { userInfo } from 'os';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})

export class JourneysComponent implements OnInit{
  
  userJourneys: IUserJourneys;
  journeys: IJourney[];
  current: string;
  information: boolean = false;
  constructor(private _journeyService: JourneysService, private _config: NgbProgressbarConfig, private _changedetector: ChangeDetectorRef) { 
    _config.max = 100;
    _config.height = '125px';
    _config.type = 'danger';

  }
  
  ngOnInit() {
    this._journeyService.getUserJourneys().subscribe((userJourneys: IUserJourneys) => {
      this.userJourneys = userJourneys;
      this.journeys = userJourneys.journeys;
      this.current = userJourneys.currentJourney
      this.information = true;
    })
  }
}
