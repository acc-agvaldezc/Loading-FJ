import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { AuthService } from '../services/auth.service';
import { IUserJourneys } from '../interfaces/journeys';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, OnChanges {
  @Input() journeyName: string;
  @Input() journeyDescription: string;
  @Input() journeyCompletePercent: number;
  @Input() journeyDuration: string;
  @Input() journeyImage: string;
  @Input() journeyCurrent: string;

  constructor(private _journeyService: JourneysService, private _authService: AuthService) { }

  ngOnInit() { this.pieChartData = [this.journeyCompletePercent, (100 - this.journeyCompletePercent)]; }
  ngOnChanges() { this.pieChartData = [this.journeyCompletePercent, (100 - this.journeyCompletePercent)]; }

  // Pie
  public pieChartData:number[];
  public pieChartType:string = 'pie';
  public pieChartColor:any [] = [{backgroundColor: ['#FF503E','#CB3729']}];
  public pieChartOptions: any = {
    width: 100,
    height: 100,
    responsive: false,
    maintainAspectRatio: true,
    legend: {
      display: false
    }
  };
  public pieChartLabels: string[] = ['Complete', 'Incomplete'];
  
    followTask(name: string): void {
      alert('You are now following the path: ' + name + '!');
      this.journeyCurrent = this.journeyName;
    }
    
  // followTask(name: string): void {
  //   if(this.journeyCurrent == '') {
  //     alert('You are now following the path: ' + name + '!');
  //     let user = this._authService.getUser();
  //     let userJourneys = (JSON.parse(localStorage.getItem(`${user.username}Journeys`)));
  //     let array = userJourneys.journeys;
  //     this._journeyService.updateFollow(user.username, array, name);
      
  //     this.journeyCurrent = this.journeyName;
  //   } else {
  //     confirm('You cannot follow this path, you are already following one');
  //   }
  // }

  // unfollowTask(name: string): void {
  //   alert('You are not following the path: ' + name + '!');
  //   let user = this._authService.getUser();
  //   let userJourneys = (JSON.parse(localStorage.getItem(`${user.username}Journeys`)));
  //   let array = userJourneys.journeys;
  //   this._journeyService.unfollow(user.username, array);
  // }
}
