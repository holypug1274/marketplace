import { Injectable, inject } from "@angular/core";
import { BasketAdapterAbstract } from "@marketplace/web-store/data-access/basket";
import { Product, ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable, map } from "rxjs";
import { SharedStoreState } from "../shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "../shared.store.feature";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";
import { HomeAdapterAbstract } from "@marketplace/web-store/data-access/home";

@Injectable()
export class HomeAdapter extends HomeAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>)

  public override listenProducts(): Observable<Product[]> {
    return this.store.select(sharedStoreFeature.selectProducts)
  }

  public override addToBasketClicked(product: Product): void {
    const basketString: string | null = sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
    const basket: { [key: number]: number } = basketString ? JSON.parse(basketString) : {};

    basket[product.id] ? basket[product.id]++ : basket[product.id] = 1;

    sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))
  }

}
