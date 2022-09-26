import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string): string {
     const first = value.slice(0,1).toUpperCase();
    return first + value.slice(1) ;
  }

}
