import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  {
    path: 'productItem',
    loadChildren: () =>
      import('./product-item/product-item.module').then(
        (m) => m.ProductItemModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
