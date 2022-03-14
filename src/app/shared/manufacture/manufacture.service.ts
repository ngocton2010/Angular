import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manufacture } from './manufacture.model';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  constructor(private http:HttpClient) { }

  formData_NCC:Manufacture = new Manufacture();
  readonly baseURL = 'https://localhost:7208/api/Manufacture'
  list_m : Manufacture[];

  postManufacture(){
    return this.http.post(this.baseURL,this.formData_NCC);
  }
  
  putManufacture(){
    return this.http.put(`${this.baseURL}/${this.formData_NCC.maNCC}`,this.formData_NCC);
  }

  deleteManufacture(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list_m = res as Manufacture[])
  }

}
