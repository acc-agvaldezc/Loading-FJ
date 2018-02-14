import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges{
  @Input() _photos = [];
  // img1: string;
  // img2: string;
  // img3: string;

  constructor() { }

  ngOnInit() { 
    // this.img1 = this._photos[0];
    // this.img2 = this._photos[1];
    // this.img3 = this._photos[2];
  }
  
  ngOnChanges() {
    
  }
 
}
