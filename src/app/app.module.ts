import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './Footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JourneysComponent } from './journeys/journeys.component';
import { JourneysService } from './services/journeys.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    JourneysComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JourneysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
