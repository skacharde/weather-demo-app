import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-weather-more-info',
  templateUrl: './weather-more-info.component.html',
  styleUrls: ['./weather-more-info.component.scss']
})
export class WeatherMoreInfoComponent implements OnInit {
  cityName: string;
  foreCastInfo: any = [];
  constructor(private service: SharedService, private activateRoute: ActivatedRoute, private router: Router) {
    this.activateRoute.paramMap.subscribe((params) => {
      this.cityName = params.get('city');
    })
  }

  ngOnInit(): void {
    this.getForecastByCity();
  }

  getForecastByCity() {
    this.service.getForecast(this.cityName).subscribe((data: any) => {
      this.foreCastInfo = data.list.filter(d => d.dt_txt.includes('09:'));
      console.log(this.foreCastInfo);
    })
  }

  getMonthName(date)
  {
   let weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()]
   return weekDay;
  }

  goBack(){
    this.router.navigateByUrl('weather-data');
  }
}
