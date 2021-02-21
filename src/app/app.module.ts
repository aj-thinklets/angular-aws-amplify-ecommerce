//All Angular modules here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';

import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';


//Service/Shared components
import { AuthGuardService } from './shared/auth-guard.service';
import { MySharedService } from './shared/shared.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

//Serverless APIs
import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular"
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,

    ProductListComponent,
    AddProductComponent,
    LoadingSpinnerComponent,
    CartComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    ReactiveFormsModule
  ],
  providers: [AmplifyService, AuthGuardService, MySharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
