//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { JourneysModule } from './journeys/journeys.module';

//Services
import { YelpService } from './services/yelp.service';
import { AuthService } from './services/auth.service';
//Gráficos
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './grafico/grafico.component';

//Components
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

//Routes
import { baseRoutes } from './router/routes';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GoogleMapsComponent,
    NavbarComponent,
    GraficoComponent
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
    JourneysModule,
    ChartsModule,    
  ],
  providers: [YelpService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {}
