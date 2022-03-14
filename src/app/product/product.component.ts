import { DecimalPipe } from '@angular/common';
import {ViewEncapsulation} from '@angular/core';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product-shared/product.model';
import { ProductService } from '../shared/product-shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  searchValue : string ; 

  constructor(public service:ProductService,
    private toastr:ToastrService
    ) { }
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Product){
    this.service.formData_SP = Object.assign({},selectedRecord); 
  }
  onDelete(id: number){
    if(confirm("Are you sure about that?")){
    this.service.deleteProduct(id)
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
