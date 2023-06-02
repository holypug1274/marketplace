import { Injectable, inject } from "@angular/core";
import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable, combineLatest, filter, map } from "rxjs";
import { SharedStoreState } from "..//+state/shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "..//+state/shared.store.feature";
import { BasketSessionStorageService, getProductsSummaryMappedFromBasketSessionStorage } from "@marketplace/web-store/utils";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";
import { sharedStoreActions } from "..//+state/shared.store.actions";
import { CheckoutAdapterAbstract } from "@marketplace/web-store/data-access/checkout";

@Injectable()
export class CheckoutAdapter extends CheckoutAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>)
  private basketSessionStorageService: BasketSessionStorageService = inject(BasketSessionStorageService)

  public override listenProducts(): Observable<ProductSummary[]> {
    return combineLatest([this.basketSessionStorageService.getSessionStorageAsObservable(), this.store.select(sharedStoreFeature.selectProducts)]).pipe(
      filter(([storageEvent, products]) => storageEvent.key === SESSION_STORAGE_BASKET_KEY),
      map(([storageEvent, products]) => {
        return getProductsSummaryMappedFromBasketSessionStorage(products)
      }))
  }

  public override proceedToPaymentClicked(): void {
    this.store.dispatch(sharedStoreActions.onProceedToPaymentClicked())
  }

  public override cancelOrderClicked(): void {
    this.store.dispatch(sharedStoreActions.onCancelOrderClicked())
  }

}
