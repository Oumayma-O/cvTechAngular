import { FiboPipe } from './fibo.pipe';

describe('FiboPipe', () => {
  it('create an instance', () => {
    const pipe = new FiboPipe();
    expect(pipe).toBeTruthy();
  });
});
