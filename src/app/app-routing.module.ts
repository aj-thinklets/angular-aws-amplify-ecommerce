import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  /* Authentication Component */
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuardService] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService]},
  { path: 'addProducts', component: AddProductComponent, canActivate: [AuthGuardService] },
  { path: "**", redirectTo: ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
