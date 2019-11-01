import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetailsModel } from '../model/product-details.model';

@Pipe({
  name: 'filterCatergory'
})
export class CategoryPipe implements PipeTransform {

  transform(items: ProductDetailsModel[], category: any): any[] {
      if (category !== 'ALL') {
    return items.filter((item) => (item.productCategory.toLowerCase() === category.toLowerCase()));
      } else {
          return items;
      }
  }
}
