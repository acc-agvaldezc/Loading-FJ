//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { JourneysModule } from './journeys/journeys.module';

//Services
import { YelpService } from './services/yelp.service';
import { AuthService } from './services/auth.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

//Routes
import { baseRoutes } from './router/routes';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    HttpClientModule,
    RouterModule.forRoot(baseRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    JourneysModule  
  ],
  providers: [YelpService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {}
