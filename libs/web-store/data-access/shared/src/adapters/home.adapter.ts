import { Injectable, inject } from "@angular/core";
import { Product } from "@marketplace/web-store/data-access/types";
import { Observable } from "rxjs";
import { SharedStoreState } from "..//+state/shared.store.state";
import { Store } from "@ngrx/store";
import { sharedStoreFeature } from "..//+state/shared.store.feature";
import { HomeAdapterAbstract } from "@marketplace/web-store/data-access/home";
import { sharedStoreActions } from "..//+state/shared.store.actions";

@Injectable()
export class HomeAdapter extends HomeAdapterAbstract {
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>);

  public override listenProducts(): Observable<Product[]> {
    return this.store.select(sharedStoreFeature.selectProducts)
  }

  public override addToBasketClicked(product: Product): void {
    this.store.dispatch(sharedStoreActions.onAddToBasketClicked({ product }))
  }

}
