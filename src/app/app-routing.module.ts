import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProuctComponent } from './create-prouct/create-prouct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/product-list',
    pathMatch:'full'
  },
  { 
    path: 'product-list',
    component: ProductlistComponent
  },
  { 
    path: 'create',
    component: CreateProuctComponent
  },
  { 
    path: 'Edit/:id',
    component: EditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
