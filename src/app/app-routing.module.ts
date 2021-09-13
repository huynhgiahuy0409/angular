import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { OrderItemComponent } from './order/order-item/order-item.component';
const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
