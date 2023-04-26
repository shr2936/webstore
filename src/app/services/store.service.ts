import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  API_BASE_URL: string = 'https://fakestoreapi.com/';

  getAllProducts(
    limit: string = '12',
    sort = 'desc',
    category: string
  ): Observable<any> {
    let url = `${this.API_BASE_URL}products`;
    if (category) url += `/category/${category}`;
    url += `?sort=${sort}&limit=${limit}`;
    return this.httpClient.get(url);
  }

  getAllCategories() {
    return this.httpClient.get(`${this.API_BASE_URL}products/categories`);
  }
}
