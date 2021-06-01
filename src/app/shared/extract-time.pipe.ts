import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractTime'
})
export class ExtractTimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let date = new Date(value * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    return `${hours}:${minutes}:${seconds}`;
  }
}
