import { Component, OnInit } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { IJourney } from '../interfaces/journeys';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {

  journey: IJourney[];
  constructor(private _journeyService: JourneysService) { }

  ngOnInit() {
    this._journeyService.getJourneys().subscribe( data => { 
          this.journey = data;
          console.log("Journeys: " + this.journey)
    });
  }

}
