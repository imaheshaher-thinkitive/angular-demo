import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  name:String="mahesh"

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
