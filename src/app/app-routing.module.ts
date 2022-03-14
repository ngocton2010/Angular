import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'product',component:ProductComponent},
  {path: 'manufacture',component:ManufactureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
