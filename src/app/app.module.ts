import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { YelpService } from './services/yelp.service';

import { FooterComponent } from './Footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JourneysService } from './services/journeys.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { baseRoutes } from './router/routes';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(baseRoutes)
  ],
  providers: [YelpService, AuthService, JourneysService],
  bootstrap: [AppComponent]
})

export class AppModule { }
