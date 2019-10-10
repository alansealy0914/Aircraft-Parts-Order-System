import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { CustomerDetailResolver } from './customerDetail/customer-detail.resolver';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderDetailResolver } from './orderDetail/order-detail.resolver';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { ProductDetailResolver } from './productDetail/product-detail.resolver';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from '././service/auth-guard.service';
import { PartsComponent } from './parts/parts.component';
import { ClientsComponent } from './clients/clients.component';
import { PartDetailComponent } from './part-detail/part-detail.component';


// Angular 8 uses the standard compliant import() statement which will allow you to detect any issues ahead of time:
/*const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  }
];*/

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/:customerId', component: CustomerDetailComponent, resolve: { customer: CustomerDetailResolver }},
    { path: 'orders/create', component: CreateOrderComponent },
    { path: 'orders/:orderId', component: OrderDetailComponent, resolve: { order: OrderDetailResolver }},
    { path: 'orders', component: OrdersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailComponent, resolve: { product: ProductDetailResolver }},
    { path: 'parts', component: PartsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'part-detail', component: PartDetailComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
      HttpClientModule
    ],
    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '!' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CustomerDetailResolver,
        OrderDetailResolver,
        ProductDetailResolver
    ]
})
export class AppRoutingModule { }
