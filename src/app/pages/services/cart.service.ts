import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() {}

  cartData: any = {
    items: [],
  };
  cartSub = new BehaviorSubject<any>(this.cartData);
  cartSub$ = this.cartSub.asObservable();

  setCartData(cartData: any) {
    this.cartData = cartData;
    this.cartSub.next(this.cartData);
  }

  getCartData() {
    return this.cartData;
  }
}
