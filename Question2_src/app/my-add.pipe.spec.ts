import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(2, 3)).toBe(5);
  });
});
