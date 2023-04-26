import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/pages/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartData: any = {};
  totalCartPrice: number = 0;

  ngOnInit(): void {
    this.cartService.cartSub$.subscribe((data: any) => {
      this.cartData = JSON.parse(JSON.stringify(data));
      if (this.cartData.items && this.cartData.items.length) {
        let itemsPrice: number[] = this.cartData.items.map(
          (item: any) => item.price * item.quantity
        );
        this.totalCartPrice = itemsPrice.reduce((a: any, b: any) => a + b, 0);
      }
    });
  }
}
