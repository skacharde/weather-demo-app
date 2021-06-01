import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherListComponent } from './component/weather-list/weather-list.component';
import { ExtractTimePipe } from './shared/extract-time.pipe';
import { WeatherMoreInfoComponent } from './component/weather-details/weather-more-info/weather-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    ExtractTimePipe,
    WeatherMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
