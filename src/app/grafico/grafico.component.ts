import { Component, OnInit, Input, OnChanges } from '@angular/core';

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

  constructor() { }

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
    maintainAspectRatio: true
  };
  
  followTask() {
    alert('Already following!');
  }
}
