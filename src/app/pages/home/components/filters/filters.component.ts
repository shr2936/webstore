import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  categories: string[] = ['Shoes', 'Clothes'];

  @Output() onSelectCategory = new EventEmitter();

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.storeService.getAllCategories().subscribe((data: any) => {
      if (data && data.length) this.categories = data;
      this.categories.splice(0, 0, 'All');
    });
  }

  updateSelectedCategory(category: string) {
    this.onSelectCategory.emit(category == 'All' ? '' : category);
  }
}
