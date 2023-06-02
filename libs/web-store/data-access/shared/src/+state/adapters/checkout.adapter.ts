import { Injectable, inject } from "@angular/core";
import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable, combineLatest, filter, map, withLatestFrom } from "rxjs";
import { SharedStoreState } from "../shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "../shared.store.feature";
import { BasketSessionStorageService, getProductsSummaryMappedFromBasketSessionStorage } from "@marketplace/web-store/utils";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";
import { sharedStoreActions } from "../shared.store.actions";
import { CheckoutAdapterAbstract } from "@marketplace/web-store/data-access/checkout";

@Injectable()
export class CheckoutAdapter extends CheckoutAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>)
  private basketSessionStorageService: BasketSessionStorageService = inject(BasketSessionStorageService)

  public override listenProducts(): Observable<ProductSummary[]> {
    //TODO this observable should get the values from the session storage event, then select the products, then produce the products to pass
    // since the event on the session storage is the only one who changes in order to give the latest updates every time something happened on the home
    // this.sessionStorageService.watchStorage().pipe(filter(storageEvent => storageEvent.key === SESSION_STORAGE_BASKET_KEY)).subscribe(console.log)
    return combineLatest([this.basketSessionStorageService.getSessionStorageAsObservable(), this.store.select(sharedStoreFeature.selectProducts)]).pipe(
      filter(([storageEvent, products]) => storageEvent.key === SESSION_STORAGE_BASKET_KEY),
      map(([storageEvent, products]) => {
        return getProductsSummaryMappedFromBasketSessionStorage(products)
      }))
  }

  public override proceedToPaymentClicked(): void {
    this.store.dispatch(sharedStoreActions.onProceedToPaymentButtonClicked())
  }

}
