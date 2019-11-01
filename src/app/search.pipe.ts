import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchValue: any): any[] {
    if(searchValue==''){
      return items
    }
    else{
      searchValue=searchValue.toLowerCase();
      return items.filter((it)=>
    {
       return it.productName.toLowerCase().includes(searchValue);
    });
    }
  }

}
