import { Injectable, inject } from "@angular/core";
import { BasketAdapterAbstract } from "@marketplace/web-store/data-access/basket";
import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable, combineLatest, filter, map, withLatestFrom } from "rxjs";
import { SharedStoreState } from "../shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "../shared.store.feature";
import { BasketSessionStorageService, addProductBasketSessionStorage, decreaseProductBasketSessionStorage, getBasketSessionStorage, getProductsSummaryMappedFromBasketSessionStorage, removeProductBasketSessionStorage } from "@marketplace/web-store/utils";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";
import { sharedStoreActions } from "../shared.store.actions";

@Injectable()
export class BasketAdapter extends BasketAdapterAbstract {
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

  public override increaseProductClicked(product: ProductSummary): void {
    this.basketSessionStorageService.addProduct(product)
  }

  public override decreaseProductClicked(product: ProductSummary): void {
    this.basketSessionStorageService.decreaseProduct(product)
  }

  public override removeProductClicked(product: ProductSummary): void {
    this.basketSessionStorageService.removeProduct(product)
  }

  public override clearBasketClicked(): void {
    this.basketSessionStorageService.resetBasket()
  }

  public override checkoutClicked(): void {
    this.store.dispatch(sharedStoreActions.onCheckoutClicked())
  }

  public override checkoutTheStoreClicked(): void {
    this.store.dispatch(sharedStoreActions.onCheckoutTheStoreClicked())
  }

}
