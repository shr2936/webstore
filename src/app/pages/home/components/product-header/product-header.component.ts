import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
})
export class ProductHeaderComponent implements OnInit {
  constructor() {}

  sortByOptions: string[] = ['ASC', 'DESC'];
  sortBy: string = this.sortByOptions[0];
  itemsCountOptions: number[] = [10, 15, 20];
  itemsCount: number = this.itemsCountOptions[0];

  @Output() viewOptionsUpdated = new EventEmitter();

  ngOnInit(): void {}

  updateViewOption(colCount: number) {
    this.viewOptionsUpdated.emit(colCount);
  }
}
