import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { YelpService } from './services/yelp.service';
import { AuthService } from './services/auth.service';

import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { RouterModule } from '@angular/router';
import { baseRoutes } from './router/routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeModule } from './welcome/welcome.module';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JourneysComponent,
    GoogleMapsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAio5BHzYvZbgt7EVXXIyQdM5sL9fb5atU'
    }),
    HttpClientModule,
    RouterModule.forRoot(baseRoutes)
  ],
  providers: [YelpService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
