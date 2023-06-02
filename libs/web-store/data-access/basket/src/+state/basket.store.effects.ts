import { Injectable, inject } from '@angular/core';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  map, tap
} from 'rxjs/operators';
import { basketStoreActions } from './basket.store.actions';
import { BasketStoreState } from './basket.store.state';
import { BasketAdapterAbstract } from './basket.adapter.abstract';

@Injectable()
export class BasketStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<BasketStoreState> = inject(Store<BasketStoreState>);
  private adapter: BasketAdapterAbstract = inject(BasketAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.adapter.listenProducts().pipe(
      map((products) => {
        return basketStoreActions.productsLoaded({ products })
      })
    )
  })

  public onDecreaseProductQuantityClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onDecreaseProductQuantityClicked),
      tap((action) => {
        this.adapter.decreaseProductClicked(action.product)
      }),
    );
  }, {
    dispatch: false
  });

  public onIncreaseProductQuantityClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onIncreaseProductQuantityClicked),
      tap((action) => {
        this.adapter.increaseProductClicked(action.product)
      }),
    );
  }, {
    dispatch: false
  });

  public onRemoveProductClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onRemoveProductClicked),
      tap((action) => {
        this.adapter.removeProductClicked(action.product)
      }),
    );
  }, {
    dispatch: false
  });

  public onClearBasketClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onClearBasketClicked),
      tap((action) => {
        this.adapter.clearBasketClicked()
      }),
    );
  }, {
    dispatch: false
  });

  public onCheckoutButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onCheckoutClicked),
      tap((action) => {
        this.adapter.checkoutClicked()
      }),
    );
  }, {
    dispatch: false
  });

  public onCheckoutTheStoreButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onCheckoutTheStoreClicked),
      tap((action) => {
        this.adapter.checkoutTheStoreClicked()
      }),
    );
  }, {
    dispatch: false
  });
}
