import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  delay, map, tap, withLatestFrom
} from 'rxjs/operators';
import { homeStoreActions } from './home.store.actions';
import { homeStoreFeature } from './home.store.feature';
import { HomeStoreState } from './home.store.state';
import { HomeAdapterAbstract } from './home.adapter.abstract';

@Injectable()
export class HomeStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private adapter: HomeAdapterAbstract = inject(HomeAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.adapter.listenProducts().pipe(
      map((products) => {
        return homeStoreActions.productsLoaded({ products })
      })
    )
  })


  public onAddToBasketClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(homeStoreActions.onAddToBasketClicked),
      // delay(1),
      withLatestFrom(this.store.select(homeStoreFeature.selectLastProductClicked)),
      tap(([action, lastProductClicked]) => {
        this.adapter.addToBasketClicked(lastProductClicked)
      }),
    );
  }, {
    dispatch: false
  });
}
