import { Injectable } from '@angular/core';
import { Product } from './product.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  formData_SP:Product = new Product();
  readonly baseURL = 'https://localhost:7208/api/Product';
  list : Product[];

  deleteProduct(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  postProduct(){
    return this.http.post(this.baseURL,this.formData_SP);
  }
  
  putProduct(){
    return this.http.put(`${this.baseURL}/${this.formData_SP.maSP}`,this.formData_SP);
  }
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list = res as Product[])
  }
}
