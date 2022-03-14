import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer-shared/customer.model';
import { CustomerService } from '../shared/customer-shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit {

  SearchCustomer : string;
  constructor(public service:CustomerService,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Customer){
    this.service.formData = Object.assign({},selectedRecord); 
  }

  onDelete(id: number){
    if(confirm("Are you sure about that?")){
    this.service.deleteCustomer(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully","Customer Register")
      },
      err =>{console.log(err)}
    );
  }
  }
}
