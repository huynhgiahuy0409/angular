import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './services/customer.service';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    resolve: {
      customer: CustomerService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
