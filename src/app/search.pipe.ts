import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log("value is ", value);
    console.log("args is ", args);
    if(!args) {
      return value;
    }
    return value.filter((val: { firstName: string; lastName: string; rollNumber: string; }) => {
      let rVal = (val.firstName.toLocaleLowerCase().includes(args)) || (val.lastName.toLocaleLowerCase().includes(args)) || (val.rollNumber.toLocaleLowerCase().includes(args));
      return rVal;
    }
    )
  }

}
