

import { Injectable, inject } from '@angular/core';
import { HomeStoreState, homeStoreActions, homeStoreFeature } from '@marketplace/web-store/data-access/home';
import { BasketVM, Product, ProductSummary } from '@marketplace/web-store/data-access/types';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { basketStoreFeature } from '@marketplace/web-store/data-access/basket'


@Injectable({
  providedIn: 'root'
})
export class BasketFacadeService {
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>)

  public getVm(): Observable<BasketVM> {
    return combineLatest([this.store.select(basketStoreFeature.selectProducts)]).pipe(
      map(([products]) => {
        return { products }
      }))
  }

  // public addToCartClicked(product: Product): void {
  //   this.store.dispatch(homeStoreActions.onAddToBasketClicked({ product }))
  // }
}
