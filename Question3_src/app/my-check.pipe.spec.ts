import { MyCheckPipe } from './my-check.pipe';

describe('MyCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCheckPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return Not Prime or Composite if value is 1', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(1,"Prime")).toBe('Not Prime or Composite');
  });

  it('should return Prime if value is 2', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(2,"Prime")).toBe('Prime');
  });

  it('should return Perfect if value is 6', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(6,"Perfect")).toBe('Perfect');
  });

  it('should return Not Perfect if value is 8', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(8,"Perfect")).toBe('Not Perfect');
  });

  it('should return Even if value is 10', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(10,"Even")).toBe('Even');
  });

  it('should return Odd if value is 13', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(13,"Odd")).toBe('Odd');
  });

  it('should return Invalid Input if args is not Prime, Perfect, Even or Odd', () => {
    const pipe = new MyCheckPipe();
    expect(pipe.transform(5,"Invalid")).toBe('Invalid Input');
  });

});
