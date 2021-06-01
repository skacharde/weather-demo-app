import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByCity(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiBaseUrl}group?id=2950158,1488616,2017370,745044,5202009&appid=3d8b309701a13f65b660fa2c64cdc517`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getForecast(city):Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiBaseUrl}forecast?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
