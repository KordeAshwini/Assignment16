import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'MultipleMethods';

  public CountCapital(str:any)
  {
    var i = 0
    var cnt=0;
    for(i=0;i< str.length;i++)
    {
      if(str[i] <= 'Z' && str[i] >= 'A')
      {
        cnt++;
      }
    }
    return cnt;
  }

  public CheckPassword(pass:any)
  {
    const capitalCount=pass.replace(/[^A-Z]/g,"").length;
    const smallCount=pass.replace(/[^a-z]/g,"").length;
    const digitCount=pass.replace(/[^0-9]/g,"").length;
    const specialCount=pass.replace(/[A-Za-z0-9]/g,"").length;

    if(capitalCount>=2 && smallCount>=3 && digitCount>=2 && specialCount>=1)
    {
      return true;
    }
    else
    {
      return false;
    }

  }

  public AdditionArray(arr:number[])
  {
    var i=0
    var sum=0
    for(i=0;i<arr.length;i++)
    {
      sum=sum+arr[i];
    }
    return sum;
  }
}
