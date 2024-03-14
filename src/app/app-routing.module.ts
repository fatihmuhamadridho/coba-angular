import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { DetailProductComponent } from './product/pages/detail-product/detail-product.component';
import { TambahProductComponent } from './product/pages/tambah-product/tambah-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/tambah',
    component: TambahProductComponent,
  },
  {
    path: 'product/:id',
    component: DetailProductComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
