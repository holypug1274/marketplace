import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@marketplace/web-store/data-access/constants';
import { Product } from '@marketplace/web-store/data-access/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private httpClient: HttpClient = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }
}
