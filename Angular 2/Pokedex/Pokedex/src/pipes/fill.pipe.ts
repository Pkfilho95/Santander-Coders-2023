import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroFill'
})
export class ZeroFillPipe implements PipeTransform {

  transform(value: number | undefined, fill: number = 3): string | undefined {
    if (value) {
      return value.toString().padStart(fill, '0');
    }
    return
  }

}
