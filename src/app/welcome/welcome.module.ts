import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { WelcomeComponent } from './welcome.component';
import { BannerComponent } from '../banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    WelcomeComponent
  ],
  declarations: [
    BannerComponent,
    DescripcionComponent,
    WelcomeComponent
  ]
})
export class WelcomeModule { }
