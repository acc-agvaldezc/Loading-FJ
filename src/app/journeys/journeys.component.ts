import { Component, OnInit } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})

export class JourneysComponent implements OnInit {
  
  value: number = 30;
  userJourneys: IUserJourneys;
  journey: IJourney[];

  constructor(private _journeyService: JourneysService, private _config: NgbProgressbarConfig) { 
    _config.max = 100;
    _config.height = '125px';
    _config.type = 'danger';

    this.userJourneys = this._journeyService.getUserJourneys();
  }

  ngOnInit() {
    console.log(this.userJourneys);
  }
}
