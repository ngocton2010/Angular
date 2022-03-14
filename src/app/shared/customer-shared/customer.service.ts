import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  formData:Customer = new Customer();
  readonly baseURL = 'https://localhost:7208/api/Customer'
  list : Customer[];

  postCustomer(){
    return this.http.post(this.baseURL,this.formData);
  }
  
  putCustomer(){
    return this.http.put(`${this.baseURL}/${this.formData.maKh}`,this.formData);
  }

  deleteCustomer(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list = res as Customer[])
  }

}
