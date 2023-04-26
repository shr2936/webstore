import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  constructor(private storeService: StoreService) {}

  getAllProducts() {
    return this.storeService.getAllProducts();
  }
}
