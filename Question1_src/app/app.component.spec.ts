import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MultipleMethods'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MultipleMethods');
  });

  it('should count capital letters',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result=app.CountCapital("Ashwini Korde");
    expect(result).toBe(2);
  });

  it('should check password requirements',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const validpass='AbCdef12@';
    const invalidpass='AbCdef12';

    const result1=app.CheckPassword(validpass);
    const result2=app.CheckPassword(invalidpass);
    
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  it('should add array elements',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result=app.AdditionArray([1,2,3]);
    expect(result).toBe(6);
  });

});
