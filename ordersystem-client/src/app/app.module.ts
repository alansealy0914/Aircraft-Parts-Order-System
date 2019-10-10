import 'jquery';
import 'lodash';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountComponent } from './customerDetail/discount.component';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { ProductService } from './products/product.service';
import { AddressService } from './shared/address.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PartsComponent } from './parts/parts.component';
import { ClientsComponent } from './clients/clients.component';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { PartsService } from './parts/parts.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        PartsComponent,
        ClientsComponent,
        PartDetailComponent,

    ],
    entryComponents: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent,
        ClientsComponent,
        PartDetailComponent

    ],
    providers: [
        CustomerService,
        OrderService,
        ProductService,
        AddressService,
        PartsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}
