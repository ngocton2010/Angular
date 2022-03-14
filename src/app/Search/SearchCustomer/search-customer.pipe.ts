import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/shared/customer-shared/customer.model';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(Customers : Customer[],searchValue:string): Customer[] {
    if(!Customers || !searchValue){
      return Customers;
    }
    return Customers.filter(customer => 
      customer.tenKh.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())|| 
      customer.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      customer.sodienthoai.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
