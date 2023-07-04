import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      var date = value instanceof Date ? value : new Date(value);
      const datePipe = new DatePipe('pt');
      return datePipe.transform(date, 'dd/MM/yyyy');
    }
    return null;
  }
}

