import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: false
})
export class CubePipe implements PipeTransform {

  transform(value: any): unknown {
    return value * value * value;
  }

}
