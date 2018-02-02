import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { YelpService } from './services/yelp.service';
import { AuthService } from './services/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
>>>>>>> 65bb04ce91e8b3c41b68c497229060fb57eeec48
import { RouterModule } from '@angular/router';
import { baseRoutes } from './router/routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeModule } from './welcome/welcome.module';
import { FooterComponent } from './shared/footer/footer.component';
<<<<<<< HEAD
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { JourneysComponent } from './journeys/journeys.component';
import {AgmCoreModule} from '@agm/core'
=======
>>>>>>> 65bb04ce91e8b3c41b68c497229060fb57eeec48

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JourneysComponent,
    GoogleMapsComponent,
    NavbarComponent
<<<<<<< HEAD
    
=======
>>>>>>> 65bb04ce91e8b3c41b68c497229060fb57eeec48
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    HttpClientModule,
    RouterModule.forRoot(baseRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAio5BHzYvZbgt7EVXXIyQdM5sL9fb5atU'
    }),
<<<<<<< HEAD
=======
    HttpClientModule,
    RouterModule.forRoot(baseRoutes)
>>>>>>> 65bb04ce91e8b3c41b68c497229060fb57eeec48
  ],
  providers: [YelpService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
