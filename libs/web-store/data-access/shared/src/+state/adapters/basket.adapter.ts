import { Injectable, inject } from "@angular/core";
import { BasketAdapterAbstract } from "@marketplace/web-store/data-access/basket";
import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable, map } from "rxjs";
import { SharedStoreState } from "../shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "../shared.store.feature";
import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";

@Injectable()
export class BasketAdapter extends BasketAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>)


  public override listenProducts(): Observable<ProductSummary[]> {
    return this.store.select(sharedStoreFeature.selectProducts).pipe(map(products => {
      const basketString: string | null = sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
      const basket: { [key: number]: number } = basketString ? JSON.parse(basketString) : {};

      return products
        .filter(product => !!basket[product.id])
        .map(product => {
          return { id: product.id, title: product.title, price: product.price, quantity: basket[product.id], image: product.image } as ProductSummary
        })
    }))
  }

  public override removeProductClicked(product: ProductSummary): void {
    throw new Error("Method not implemented.");
  }

  public override clearBasketClicked(): void {
    throw new Error("Method not implemented.");
  }

  public override checkoutClicked(): void {
    throw new Error("Method not implemented.");
  }

}
