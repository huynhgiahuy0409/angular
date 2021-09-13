import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements Resolve<any> {
  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CustomerService | Observable<any> | Promise<any> {
    console.log(route)
    console.log(state)
    let of1 = of(1,2,3,4)
    of1.subscribe(rs => {
      console.log(rs)
    })
    return of1
  }
}
