import { Pipe, PipeTransform } from '@angular/core';
// memo decorator
import memo from 'memo-decorator';

@Pipe({
  name: 'fibo',
  pure: true,
})
export class FiboPipe implements PipeTransform {

  transform(n: number): number {
    return this.fibonnaci(n);
  }

  @memo()
  fibonnaci(n: number): number {
    if (n == 1 || n == 0) {
      return 1;
    }
    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }
}
