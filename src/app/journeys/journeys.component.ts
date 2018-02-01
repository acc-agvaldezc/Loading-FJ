import { Component, OnInit } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { IJourney } from '../interfaces/journeys';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})

export class JourneysComponent implements OnInit {
  
  value: number = 25;
  journey: IJourney[];
  constructor(private _journeyService: JourneysService, private _config: NgbProgressbarConfig) { 
    _config.max = 100;
    _config.height = '125px';
    _config.type = 'danger';

    if(this.value > 0) {
      _config.showValue = true;
    } else {
      _config.showValue = false;
    }
  }

  ngOnInit() {
    this._journeyService.getJourneys().subscribe( data => { 
          this.journey = data;
          //console.log("Journeys: " + this.journey)
    });
  }

}
