

import { Injectable, inject } from '@angular/core';
import { HomeStoreState } from '@marketplace/web-store/data-access/home';
import { BasketVM, ProductSummary } from '@marketplace/web-store/data-access/types';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { basketStoreActions, basketStoreFeature } from '@marketplace/web-store/data-access/basket'


@Injectable({
  providedIn: 'root'
})
export class BasketFacadeService {
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>)

  public getVm(): Observable<BasketVM> {
    return combineLatest([this.store.select(basketStoreFeature.selectProducts), this.store.select(basketStoreFeature.selectTotalPrice)]).pipe(
      map(([products, totalPrice]) => {
        return { products, totalPrice }
      }))
  }

  public checkoutClicked(): void {
    this.store.dispatch(basketStoreActions.onCheckoutClicked())
  }

  public clearBasketClicked(): void {
    this.store.dispatch(basketStoreActions.onClearBasketClicked())
  }

  public decreaseProductQuantityClicked(product: ProductSummary): void {
    this.store.dispatch(basketStoreActions.onDecreaseProductQuantityClicked({ product }))
  }

  public increaseProductQuantityClicked(product: ProductSummary): void {
    this.store.dispatch(basketStoreActions.onIncreaseProductQuantityClicked({ product }))
  }

  public removeProductClicked(product: ProductSummary): void {
    this.store.dispatch(basketStoreActions.onRemoveProductClicked({ product }))
  }

  public checkoutTheStoreClicked(): void {
    this.store.dispatch(basketStoreActions.onCheckoutTheStoreClicked())
  }
}
