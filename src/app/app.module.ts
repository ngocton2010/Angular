import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { ManufactureFormComponent } from './manufacture/manufacture-form/manufacture-form.component';
import { SearchProductPipe } from './Search/SearchProduct/search-product.pipe';
import { SearchCustomerPipe } from './Search/SearchCustomer/search-customer.pipe';
import { SearchManuFaturePipe } from './Search/SearchManuFature/search-manu-fature.pipe';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    NavbarComponent,
    ProductComponent,
    ProductFormComponent,
    ManufactureComponent,
    ManufactureFormComponent,
    SearchProductPipe,
    SearchCustomerPipe,
    SearchManuFaturePipe,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
