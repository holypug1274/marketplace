import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@marketplace/web-store/data-access/types';
import { Observable } from 'rxjs';

const API_URL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private httpClient: HttpClient = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }
}
