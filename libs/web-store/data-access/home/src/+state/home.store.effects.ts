import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  delay, map, switchMap, take, tap, withLatestFrom
} from 'rxjs/operators';
import { homeStoreActions } from './home.store.actions';
import { homeStoreFeature } from './home.store.feature';
import { HomeStoreState } from './home.store.state';
import { SESSION_STORAGE_BASKET_KEY } from '@marketplace/web-store/data-access/constants';
import { HomeAdapterAbstract } from './home.adapter.abstract';

@Injectable()
export class HomeStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private adapter: HomeAdapterAbstract = inject(HomeAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.actions$.pipe(
      take(1), //TODO is correct?
      switchMap(() => this.adapter.listenProducts()),
      map((products) => {
        return homeStoreActions.productsLoaded({ products })
      })
    )
  })


  public onAddToBasketClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(homeStoreActions.onAddToBasketClicked),
      delay(1),
      withLatestFrom(this.store.select(homeStoreFeature.selectLastProductClicked)), //TODO should I set and then select the elmeent?
      tap(([action, lastProductClicked]) => {
        this.adapter.addToBasketClicked(lastProductClicked)
        // const basketString: string | null = sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
        // const basket: { [key: number]: number } = basketString ? JSON.parse(basketString) : {};

        // basket[lastProductClicked.id] ? basket[lastProductClicked.id]++ : basket[lastProductClicked.id] = 1;

        // sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });
}
