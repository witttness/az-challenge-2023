import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BASE_PATH, DataModule } from './data';
import { MenuCardDisplayComponent } from './menu-card-display/menu-card-display.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutComponent } from './views/about/about.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { StarRatingModule } from 'angular-star-rating';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuCardDisplayComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    MenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DataModule,
    StarRatingModule.forRoot(),
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.apiBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
