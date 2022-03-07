import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log("value", value)
    return value.sort((a:  any, b: any)=> {
      if(a.name > b.name){ return 1}
      if(a.name < b.name){ return -1}
      return 0;
    })
    //return null;
    //return value.replace(/(\d{1})(\d{2})(\d{2})(\d{3})/, '+91-$1-$2-$3-$4');
  }

}
