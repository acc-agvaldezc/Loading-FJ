import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @Input() journeyName: string;
  @Input() journeyDescription: string;
  @Input() journeyCompletePercent: number;
  @Input() journeyDuration: string;

  constructor() {
    console.log(this.journeyCompletePercent);
  }

  ngOnInit() {
    this.pieChartData = [this.journeyCompletePercent, (100 - this.journeyCompletePercent)];
  }

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
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public numeros_random(){
    this.pieChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

}
