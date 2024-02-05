import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value1 : number, value2 : number,...args: number[]): number 
  {
    let product = 1;

    /*for(let i = 0; i < args.length; i++)
    {
        product = value * args[i];
    }*/
    
    product = value1 * value2;

    return product;
  }

}
