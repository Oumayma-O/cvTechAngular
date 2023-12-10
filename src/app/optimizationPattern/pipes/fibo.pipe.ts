import { Pipe, PipeTransform } from '@angular/core';

import memo from "memo-decorator";

@Pipe({
  name: 'fibo'
})
export class FiboPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  @memo()
  fibonnaci(n: number): number {
    if (n == 1 || n == 0) {
      return 1;
    }
    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }
}
