import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Manufacture } from '../shared/manufacture/manufacture.model';
import { ManufactureService } from '../shared/manufacture/manufacture.service';
@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.css']
})
export class ManufactureComponent implements OnInit {

  searchValue_Manu:string;

  constructor(public service:ManufactureService,
    private toastr:ToastrService
    ) { }
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Manufacture){
    this.service.formData_NCC = Object.assign({},selectedRecord); 
  }
  onDelete(id: number){
    if(confirm("Are you sure about that?")){
    this.service.deleteManufacture(id)
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
