import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './product/pages/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
