import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  weatherData: any = [];
  constructor(private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    this.service.getWeatherByCity().subscribe((data: any) => {
      console.log(data);
      this.weatherData = data.list;
    })
  }

  onCardClicked(city) {
    this.router.navigateByUrl(`weather-more-info/${city}`);
  }
}
