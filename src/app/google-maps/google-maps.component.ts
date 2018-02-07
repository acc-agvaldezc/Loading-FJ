import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit{
  /* --Follow the structure to define the map values to get the business location--
  <app-google-maps [_lat]="mapLat" [_lng]="maplng" [_businessName]="mapName"></app-google-maps>
  */
  @Input() _businessName: string 
  @Input() _lat: number //= 25.669996;
  @Input() _lng: number // = -100.3800037;
  private _zoom: number = 15; 

  constructor() { }

  ngOnInit() {
    
  }

}
