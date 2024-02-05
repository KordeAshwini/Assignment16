import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should multiply 2 numbers', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(2, 3)).toBe(6);
  });

  

});
