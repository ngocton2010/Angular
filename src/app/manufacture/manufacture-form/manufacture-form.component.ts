import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Manufacture } from 'src/app/shared/manufacture/manufacture.model';
import { ManufactureService } from 'src/app/shared/manufacture/manufacture.service';

@Component({
  selector: 'app-manufacture-form',
  templateUrl: './manufacture-form.component.html',
  styleUrls: ['./manufacture-form.component.css']
})
export class ManufactureFormComponent implements OnInit {

  constructor(public service:ManufactureService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData_NCC = new Manufacture();
  }
  insertRecord(form : NgForm){
    this.service.postManufacture().subscribe(
      res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success("Register Successfully","Customer Register")
      },
      err =>{console.log(err); }
    );
  }
  updateRecord(form : NgForm){
    this.service.putManufacture().subscribe(
      res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info("Updated Successfully","Product Register")
      },
      err =>{console.log(err); }
    );
  }

}
