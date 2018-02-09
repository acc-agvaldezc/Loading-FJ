import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JourneysService } from '../services/journeys.service';
import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { ITask } from '../interfaces/task';
import { IYelpBusinessDetailResponse } from '../interfaces/yelp';

@Component({
  selector: 'app-journey-task',
  templateUrl: './task-accordion.component.html',
  styleUrls: ['./task-accordion.component.css']
})

export class TaskAccordionComponent implements OnInit {

  selectedJourney: IJourney;
  tasks: ITask[];
  userJourneys: IUserJourneys;
  journeys: IJourney[];
  tasksDetails: IYelpBusinessDetailResponse[];
  current: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _pathService: JourneysService) { 
    
      this._route.params.subscribe((params) => {
        this.getJourney(params.name);
      });
      
      this._pathService.getUserJourneys().subscribe((userJourneys: IUserJourneys) => {
        this.userJourneys = userJourneys;
        this.journeys = userJourneys.journeys;
        this.current = userJourneys.currentJourney
      })
  }

  getJourney(id: string) {
    this.selectedJourney = this._pathService.getJourney(id)
    this.tasks = this.selectedJourney.tasks;
  }

  ngOnInit() {
  }
}
