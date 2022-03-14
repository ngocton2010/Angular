import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/customer-shared/customer.model';
import { CustomerService } from 'src/app/shared/customer-shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(public server:CustomerService,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }

  insertRecord(form : NgForm){
    this.server.postCustomer().subscribe(
      res =>{
      this.resetForm(form);
      this.server.refreshList();
      this.toast.success("Register Successfully","Customer Register")
      },
      err =>{console.log(err); }
    );
  }

  updateRecord(form : NgForm){
    this.server.putCustomer().subscribe(
      res =>{
      this.resetForm(form);
      this.server.refreshList();
      this.toast.info("Updated Successfully","Customer Register")
      },
      err =>{console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.server.formData = new Customer();
  }
}
