import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  delay, map, switchMap, take, tap, withLatestFrom
} from 'rxjs/operators';
import { basketStoreActions } from './basket.store.actions';
import { basketStoreFeature } from './basket.store.feature';
import { BasketStoreState } from './basket.store.state';
import { BasketAdapterAbstract } from './basket.adapter.abstract';

const SESSION_STORAGE_BASKET_KEY = 'web-store-basket'

@Injectable()
export class BasketStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<BasketStoreState> = inject(Store<BasketStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private adapter: BasketAdapterAbstract = inject(BasketAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.actions$.pipe(
      take(1), // TODO is correct? technically once susbscribed to the adapter it's fine
      switchMap(() => this.adapter.listenProducts()),
      map((products) => {
        return basketStoreActions.productsLoaded({ products })
      })
    )
  })

  // public onAddToBasketClicked$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(basketStoreActions.onAddToBasketClicked),
  //     delay(1),
  //     withLatestFrom(this.store.select(basketStoreFeature.selectLastProductClicked)), //TODO should I set and then select the elmeent?
  //     tap(([action, lastProductClicked]) => {
  //       const basketString: string | null = sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
  //       const basket: { [key: number]: number } = basketString ? JSON.parse(basketString) : {};

  //       basket[lastProductClicked.id] ? basket[lastProductClicked.id]++ : basket[lastProductClicked.id] = 1;

  //       sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))
  //     }),
  //   );
  // }, {
  //   dispatch: false //routing action is dispatched automatically
  // });
}
