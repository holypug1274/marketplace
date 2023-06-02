import { SESSION_STORAGE_BASKET_KEY } from '@marketplace/web-store/data-access/constants';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, Product } from '@marketplace/web-store/data-access/types';
import { ToastrService } from 'ngx-toastr';

const BASKET_INITIAL_VALUE = { products: {} }

const EVENT_INITIAL_VALUE = <StorageEvent>{
  key: SESSION_STORAGE_BASKET_KEY,
  newValue: JSON.stringify(BASKET_INITIAL_VALUE),
  storageArea: sessionStorage,
}

@Injectable({ providedIn: 'root' })
export class BasketSessionStorageService {
  private toastrService: ToastrService = inject(ToastrService)

  private sessionStorageSubject: BehaviorSubject<StorageEvent> = new BehaviorSubject<StorageEvent>(EVENT_INITIAL_VALUE);

  public getSessionStorageAsObservable(): Observable<StorageEvent> {
    return this.sessionStorageSubject.asObservable();
  }

  public resetBasket(): void {
    this.setBasket(BASKET_INITIAL_VALUE);
  }

  private setBasket(basket: Basket): void {
    window.sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))

    this.toastrService.success('Basket updated', "")

    this.sessionStorageSubject.next(<StorageEvent>{
      key: SESSION_STORAGE_BASKET_KEY,
      newValue: JSON.stringify(basket),
      storageArea: sessionStorage,
    });
  }

  public getBasket(): Basket {
    const basketString: string | null = window.sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
    return (basketString ? JSON.parse(basketString) : BASKET_INITIAL_VALUE) as Basket;
  }

  public addProduct(product: Product): void {
    const basket: Basket = this.getBasket()

    basket.products[product.id] ? basket.products[product.id]++ : basket.products[product.id] = 1;

    this.setBasket(basket)
  }

  public decreaseProduct(product: Product): void {
    const basket: Basket = this.getBasket()

    basket.products[product.id] > 1 ? basket.products[product.id]-- : delete basket.products[product.id];

    this.setBasket(basket)
  }

  public removeProduct(product: Product): void {
    const basket: Basket = this.getBasket()

    delete basket.products[product.id];

    this.setBasket(basket)
  }

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.storageArea == sessionStorage) {
        this.sessionStorageSubject.next(event);
        console.log(event.newValue)
      }
    });
  }


}


