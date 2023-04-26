import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {}

  cart: any = {
    items: [],
  };

  displayedColumnNames: string[] = ['image', 'name', 'price', 'quantity'];
  displayedColumns: {
    name: string;
    key: any;
    width: string;
  }[] = [
    { key: 'image', name: 'Product', width: '200px' },
    { key: 'name', name: 'Name', width: '200px' },
    { key: 'price', name: 'Price', width: '100px' },
    { key: 'quantity', name: 'Quantity', width: '100px' },
  ];

  cols: string[] = ['column1'];
  data: any[] = [
    {
      column1: 'Col 1',
    },
  ];

  ngOnInit(): void {
    this.cart = Object.assign({}, this.cartService.getCartData());
  }

  updateQuantity(value: number, index: number) {
    let item = this.cart.items[index];
    item.quantity += value;
    if (!item.quantity) {
      this.cart.items.splice(index, 1);
    }
    this.cartService.setCartData(this.cart);
  }

  onClickEmptyCart() {
    this.cart.items = [];
    this.cartService.setCartData(this.cart);
  }

  removeItem(index: number) {
    this.cart.items.splice(index, 1);
    this.cartService.setCartData(this.cart);
  }

  onCheckout() {
    this.http.post("http://localhost:4242/checkout", {
      items: this.cart.items
    }).subscribe(async (response: any) => {
      let stripe = await loadStripe('pk_test_51MjOWvSAiZrz4mELBTpwaHLkThJRBYi7KwaDvc0DN6JeusDaMtF5bWPJRE68FqenjCV8WQY8lXzTFQVMkYWdHNCs00ciuxPkab');
      stripe?.redirectToCheckout({
        sessionId: response.id
      })
    })
  }
}
