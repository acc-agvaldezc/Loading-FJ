import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { YelpService } from './services/yelp.service';
import { AuthService } from './services/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { baseRoutes } from './router/routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeModule } from './welcome/welcome.module';
import { FooterComponent } from './shared/footer/footer.component';

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
  providers: [YelpService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
