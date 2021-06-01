import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherMoreInfoComponent } from './component/weather-details/weather-more-info/weather-more-info.component';
import { WeatherListComponent } from './component/weather-list/weather-list.component';

const routes: Routes = [
  { path: 'weather-data', component: WeatherListComponent },
  { path: 'weather-more-info/:city', component: WeatherMoreInfoComponent },
  { path: '', redirectTo: 'weather-data', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
