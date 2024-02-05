import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value1 : number, value2 : number , ...args: number[]): number
  {
     let sum = 0;
     
      /*for(let i = 0; i < args.length; i++)
      {
          sum = value + args[i];
      }*/

      sum = value1 + value2;

    return sum;
  }

}
