import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { sharedStoreActions } from './shared.store.actions';
import { SharedStoreState } from './shared.store.state';
import { ProductsApiService } from '@marketplace/web-store/data-access/api';
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types';
import { BasketSessionStorageService } from '@marketplace/web-store/utils';

@Injectable()
export class SharedStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productsApiService: ProductsApiService = inject(ProductsApiService);
  private sessionStorageService: BasketSessionStorageService = inject(BasketSessionStorageService)

  // ROUTING

  public onRouterNavigated$ = createEffect(() => {
    return this.actions$.pipe(
      filter(action => action.type == '@ngrx/effects/init'), //TODO this event should be checked from the router when is navigating to /home since this init event only happens when the app is loaded the first time
      // ofType(ROUTER_REQUEST),
      // filter(action => this.routerState.snapshot.url.indexOf('/home') != -1),
      map((action) => sharedStoreActions.loadProducts()),
    );
  });

  public onHomeClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onHomeClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onBasketClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onBasketClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.BASKET], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onCheckoutClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onCheckoutClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.CHECKOUT], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onCheckoutTheStoreClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onCheckoutTheStoreClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onProceedToPaymentClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onProceedToPaymentClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.SUCCESS], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onCancelOrderClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onCancelOrderClicked),
      tap((action) => {
        this.sessionStorageService.resetBasket();
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onGoHomeClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onGoHomeClicked),
      tap((action) => {
        this.sessionStorageService.resetBasket();
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  // API

  public loadAccounts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.loadProducts),
      switchMap(res => {
        return this.productsApiService.getProducts().pipe(
          map((res) => {
            return sharedStoreActions.loadProductsSuccess({ products: res });
          }),
          catchError((err, caught) => {
            sharedStoreActions.loadProductsError({ err });
            return caught
          }))
      })
    );
  });

  // SESSION STORAGE

  public addProductBasketSessionStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onAddToBasketClicked),
      tap(action => {
        this.sessionStorageService.addProduct(action.product)
      })
    );
  }, {
    dispatch: false
  });


}
