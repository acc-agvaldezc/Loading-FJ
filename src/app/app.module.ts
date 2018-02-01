import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { YelpService } from './services/yelp.service';

import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './Footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JourneysComponent } from './journeys/journeys.component';
import { JourneysService } from './services/journeys.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    JourneysComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [YelpService, AuthService, JourneysService],
  bootstrap: [AppComponent]
})

export class AppModule { }
