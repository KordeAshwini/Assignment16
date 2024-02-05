import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCheck',
  standalone: true
})
export class MyCheckPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string
  {
     
    if(args[0]=="Prime")
    {
      if(value==1)
      {
        return "Not Prime or Composite";
      }
      else
      {
        for(var i=2;i<value/2;i++)
        {
          if(value%i==0)
          {
            return "Not Prime";
          }
        }
        return "Prime";
      } 
    }

    else if(args[0]=="Perfect")
    {
      var sum=0;
      for(var i=1;i<value;i++)
      {
        if(value%i==0)
        {
          sum=sum+i;
        }
      }
      if(sum==value)
      {
        return "Perfect";
      }
      else
      {
        return "Not Perfect";
      }
    }
    

    else if(args[0]=="Even")
    {
      if(value%2==0)
      {
        return "Even";
      }
      else
      {
        return "Not Even";
      }
    }

    else if(args[0]=="Odd")
    {
      if(value%2==0)
      {
        return "Not Odd";
      }
      else
      {
        return "Odd";
      }
    }
    
    else
    {
      return "Invalid Input";
    }
    
  }

}
