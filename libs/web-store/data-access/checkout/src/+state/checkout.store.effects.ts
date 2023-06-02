import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  map, tap
} from 'rxjs/operators';
import { checkoutStoreActions } from './checkout.store.actions';
import { CheckoutStoreState } from './checkout.store.state';
import { CheckoutAdapterAbstract } from './checkout.adapter.abstract';
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types';

@Injectable()
export class CheckoutStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<CheckoutStoreState> = inject(Store<CheckoutStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private adapter: CheckoutAdapterAbstract = inject(CheckoutAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.adapter.listenProducts().pipe(
      map((products) => {
        return checkoutStoreActions.productsLoaded({ products })
      })
    )
  })

  public onProceedToPaymentClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkoutStoreActions.onProceedToPaymentClicked),
      tap((action) => {
        this.adapter.proceedToPaymentClicked()
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });
}
