import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr',
  standalone: false
})
export class SqrPipe implements PipeTransform {

  transform(value: any): unknown {
    return value * value;
  }

}
