import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types';

@Injectable()
export class BasketStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<BasketStoreState> = inject(Store<BasketStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
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
    dispatch: false //routing action is dispatched automatically
  });

  public onIncreaseProductQuantityClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onIncreaseProductQuantityClicked),
      tap((action) => {
        this.adapter.increaseProductClicked(action.product)
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onRemoveProductClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onRemoveProductClicked),
      tap((action) => {
        this.adapter.removeProductClicked(action.product)
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onClearBasketClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onClearBasketClicked),
      tap((action) => {
        this.adapter.clearBasketClicked()
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onCheckoutButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onCheckoutClicked),
      tap((action) => {
        this.adapter.checkoutClicked()
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onCheckoutTheStoreButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(basketStoreActions.onCheckoutTheStoreClicked),
      tap((action) => {
        this.adapter.checkoutTheStoreClicked()
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });
}
