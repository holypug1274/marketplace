import { Injectable, inject } from "@angular/core";
import { Observable, combineLatest, filter, map } from "rxjs";
import { SharedStoreState } from "../+state/shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "../+state/shared.store.feature";
import { sharedStoreActions } from "../+state/shared.store.actions";
import { SuccessAdapterAbstract } from "@marketplace/web-store/data-access/success";
import { BasketSessionStorageService, getProductsSummaryMappedFromBasketSessionStorage, getTotalProductsSummaryPrice } from "@marketplace/web-store/utils";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";

@Injectable()
export class SuccessAdapter extends SuccessAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>);
  private basketSessionStorageService: BasketSessionStorageService = inject(BasketSessionStorageService)

  public override listenTotalPrice(): Observable<number> {
    return combineLatest([this.basketSessionStorageService.getSessionStorageAsObservable(), this.store.select(sharedStoreFeature.selectProducts)]).pipe(
      filter(([storageEvent, products]) => storageEvent.key === SESSION_STORAGE_BASKET_KEY),
      map(([storageEvent, products]) => {
        return getTotalProductsSummaryPrice(getProductsSummaryMappedFromBasketSessionStorage(products))
      }))
  }

  public override onGoHomeClicked(): void {
    this.store.dispatch(sharedStoreActions.onGoHomeClicked())
  }

}
