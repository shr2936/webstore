import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit {
  constructor() {}

  @Input() product: any = null;
  @Input() colsCount: number = 3;
  @Input() category: string = '';

  @Output() onAddToCart = new EventEmitter();
  @Output() onUpdateProductQuantity = new EventEmitter();

  ngOnInit(): void {}

  addToCart() {
    this.onAddToCart.emit();
  }

  updateProductQuantity(value: number) {
    this.onUpdateProductQuantity.emit(value);
  }
}
