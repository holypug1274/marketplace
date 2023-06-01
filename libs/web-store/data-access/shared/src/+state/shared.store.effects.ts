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
  tap
} from 'rxjs/operators';
import { sharedStoreActions } from './shared.store.actions';
import { SharedStoreState } from './shared.store.state';
import { ProductsApiService } from '@marketplace/web-store/data-access/api';
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types';
import { BasketAdapter } from './adapters/basket.adapter';
import { BasketAdapterAbstract } from '@marketplace/web-store/data-access/basket';

@Injectable()
export class SharedStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<SharedStoreState> = inject(Store<SharedStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productsApiService: ProductsApiService = inject(ProductsApiService);
  private basketAdapter: BasketAdapterAbstract = inject(BasketAdapterAbstract);

  // ROUTING

  public onRouterNavigated$ = createEffect(() => {
    return this.actions$.pipe(
      filter(action => action.type == '@ngrx/effects/init'),
      map((action) => sharedStoreActions.loadProducts()),
    );
  });

  public onHomeButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onHomeButtonClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onBasketButtonClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sharedStoreActions.onBasketButtonClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.BASKET, { relativeTo: this.activatedRoute }]);
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
}
