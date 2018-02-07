import { Component, OnInit, OnDestroy} from '@angular/core';
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
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _pathService: JourneysService) { 
    
      this._route.params.subscribe((params) => {
        this.getJourney(parseInt(params.id));
      });

      this.userJourneys = this._pathService.getUserJourneys();
      this.journeys = this.userJourneys.journeys;
  }

  getJourney(id: number) {
    this.selectedJourney = this._pathService.getJourney(id)
    this.tasks = this.selectedJourney.tasks;
  }

  ngOnInit() {
    console.log(this.selectedJourney);
    console.log(this.tasks);
  }
}
