import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibo'
})
export class FiboPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
