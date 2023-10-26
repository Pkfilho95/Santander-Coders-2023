import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormat'
})
export class StatusFormatPipe implements PipeTransform {


  transform(value: any, ...args: unknown[]): unknown {
    if (value === 'toDo') return 'To Do'
    if (value === 'inProgress') return 'In Progress'
    return value
  }

}
