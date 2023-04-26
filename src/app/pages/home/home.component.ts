import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  colCount: number = 3;
  selectedCategory: string = '';

  //   products: any[] = [
  //     {
  //       id: 1,
  //       image: '',
  //       name: 'p1',
  //       price: 20,
  //       quantity: 0,
  //       category: 'Category 1',
  //     },
  //   ];
  products: any[] = [];
  cartData: any = null;

  productsLimit: number = 12;
  productsSortOption: string = 'desc';

  productsSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.getAllProducts();
    this.getCartData();
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  getAllProducts() {
    this.productsSubscription = this.storeService
      .getAllProducts(
        this.productsLimit.toString(),
        this.productsSortOption,
        this.selectedCategory
      )
      .subscribe((response) => {
        this.products = response.map((prod: any) => {
          return {
            id: prod.id,
            image: prod.image,
            name: prod.title,
            price: prod.price,
            quantity: 0,
            category: prod.category,
          };
        });
      });
  }

  getCartData() {
    this.cartData = this.cartService.getCartData();
    let removeIndices: number[] = [];

    this.cartData?.items?.forEach((data: any, cartItemIndex: number) => {
      let index = this.products.findIndex((prod) => prod.id == data.pid);
      if (index > -1) {
        this.products[index].quantity = data.quantity;
      } else {
        removeIndices.push(cartItemIndex);
      }
    });

    if (removeIndices.length > 0) {
      for (let i = removeIndices.length - 1; i >= 0; i--)
        this.cartData.items.splice(i);
      this.cartService.setCartData(this.cartData);
    }
  }

  updateColCount(colCount: number) {
    this.colCount = colCount;
  }

  updateSelectedCategory(category: string) {
    this.selectedCategory = category;
    this.getAllProducts();
  }

  onAddToCart(index: number) {
    this.products[index].quantity = 1;
    this.addProductToCartItems(index);
  }

  updateProductQuantity(index: number, value: number) {
    this.products[index].quantity += value;
    this.updateCartItemQuantity(index);
  }

  addProductToCartItems(index: number) {
    let product = this.products[index];
    this.cartData.items.push({
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      pid: product.id,
    });
    console.log(this.cartData, this.products);
    this.cartService.setCartData(this.cartData);
  }

  updateCartItemQuantity(index: number) {
    let cartItemIndex = this.cartData.items.findIndex(
      (item: any) => item.pid == this.products[index].id
    );
    if (this.products[index].quantity == 0)
      this.cartData.items.splice(cartItemIndex, 1);
    else {
      this.cartData.items[cartItemIndex].quantity =
        this.products[index].quantity;
    }
    console.log(this.cartData, this.products);
    this.cartService.setCartData(this.cartData);
  }
}
