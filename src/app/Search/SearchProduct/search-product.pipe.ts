import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shared/product-shared/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(Products : Product[],searchValue:string): Product[] {
    if(!Products || !searchValue){
      return Products;
    }
    return Products.filter(product => 
      product.tenSP.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())|| 
      product.nhaCC.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
