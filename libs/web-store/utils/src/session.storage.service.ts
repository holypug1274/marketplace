import { SESSION_STORAGE_BASKET_KEY } from '@marketplace/web-store/data-access/constants';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, Product } from '@marketplace/web-store/data-access/types';

const BASKET_INITIAL_VALUE = <StorageEvent>{
  key: SESSION_STORAGE_BASKET_KEY,
  newValue: JSON.stringify({ products: {} }),
  storageArea: sessionStorage,
}

@Injectable({ providedIn: 'root' })
export class BasketSessionStorageService {
  private sessionStorageSubject: BehaviorSubject<StorageEvent> = new BehaviorSubject<StorageEvent>(BASKET_INITIAL_VALUE);

  public getSessionStorageAsObservable(): Observable<StorageEvent> {
    return this.sessionStorageSubject.asObservable();
  }

  public resetBasket(): void {
    this.setBasket({ products: {} });
  }

  private setBasket(basket: Basket): void {
    window.sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))

    this.sessionStorageSubject.next(<StorageEvent>{
      key: SESSION_STORAGE_BASKET_KEY,
      newValue: JSON.stringify(basket),
      storageArea: sessionStorage,
    });
  }

  public getBasket(): Basket {
    const basketString: string | null = window.sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
    return (basketString ? JSON.parse(basketString) : { products: {} }) as Basket;
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
    // this.sessionStorageSubject.next(<StorageEvent>{
    //   key: SESSION_STORAGE_BASKET_KEY,
    //   newValue: null,
    //   storageArea: sessionStorage,
    // });

    window.addEventListener('storage', (event) => {
      if (event.storageArea == sessionStorage) {
        this.sessionStorageSubject.next(event);
        console.log(event.newValue)
      }
    });
  }


}


