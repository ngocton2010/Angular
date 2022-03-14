import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { ManufactureService } from 'src/app/shared/manufacture/manufacture.service';
import { Product } from 'src/app/shared/product-shared/product.model';
import { ProductService } from 'src/app/shared/product-shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product$: Observable<Product[]>;
  filter = new FormControl('');

  constructor(public service:ProductService,
    public service_m:ManufactureService,
    private toastr:ToastrService,
    ) {}
  ngOnInit(): void {
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData_SP = new Product();
  }
  insertRecord(form : NgForm){
    this.service.postProduct().subscribe(
      res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success("Register Successfully","Customer Register")
      },
      err =>{console.log(err); }
    );
  }

  updateRecord(form : NgForm){
    this.service.putProduct().subscribe(
      res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info("Updated Successfully","Product Register")
      },
      err =>{console.log(err); }
    );
  }
}
