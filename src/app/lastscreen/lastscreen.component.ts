import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IYelpBusinessDetailResponse } from '../interfaces/yelp';
import { YelpService } from '../services/yelp.service';
import { JourneysService } from '../services/journeys.service';
import { IJourney } from '../interfaces/journeys';
import { ITask } from '../interfaces/task';
import { OnDestroy, OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-lastscreen',
  templateUrl: './lastscreen.component.html',
  styleUrls: ['./lastscreen.component.css']
})

export class LastscreenComponent implements OnInit {
  currentTask: ITask;
  journey: IJourney;
  taskDetails: IYelpBusinessDetailResponse;
  previousTask?: ITask;
  nextTask?: ITask;
  checked1: boolean = false;
  name: string;
  idTask: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
     private _yelpService: YelpService, private _journeyService: JourneysService) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.getDetail(params.challenge);
      this.name = params.journey;
      this.idTask = params.challenge;
    });

    this._journeyService.getUserJourneys().subscribe(userJourneys => {
      this.journey = userJourneys.journeys.find(journey => journey.name === this.name)
      this.currentTask = this.journey.tasks.find(task => task.taskData.id === this.idTask);
      this.nextTask = this.journey.tasks[this.journey.tasks.indexOf(this.currentTask) + 1]
      this.previousTask = this.journey.tasks[this.journey.tasks.indexOf(this.currentTask) - 1]
      
      if(this.previousTask === undefined) {
        this.previousTask = null;
      }

      if(this.nextTask === undefined) {
        this.nextTask = null;
      }
    });
    
    
  }

  getDetail(id: string) {
    this._yelpService.getBusinessDetail(id).subscribe((detail: IYelpBusinessDetailResponse) => {
      this.taskDetails = detail;
      this.checked1 = true;
    });
  }

  toggleTask(): void {
    if(!this.currentTask.isCurrentTask && !this.currentTask.completed){
      this._journeyService.updateCurrentTask(this.currentTask);
      return 
    }

    if(this.currentTask.isCurrentTask && !this.currentTask.completed){
      this._journeyService.finishTask(this.currentTask, this.journey)
      return
    } else {
      alert("You have already finished this challenge!");
    }
  }

  goToNext(): void {
    this.currentTask = this.nextTask;
  }

  goToPrevious(): void {
    this.currentTask = this.previousTask;
  }
}
