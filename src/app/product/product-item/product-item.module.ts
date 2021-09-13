import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemRoutingModule } from './product-item-routing.module';
import { ProductItemComponent } from './product-item.component';


@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductItemRoutingModule
  ]
})
export class ProductItemModule { }
