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
import { webStoreStoreActions } from './store.actions';
import { WebStoreStoreState } from './store.state';
import { ProductsApiService } from '@marketplace/web-store/data-access/api';
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types';

@Injectable()
export class AccountsStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<WebStoreStoreState> = inject(Store<WebStoreStoreState>);
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productsApiService: ProductsApiService = inject(ProductsApiService);

  // ROUTING

  public onRouterNavigated$ = createEffect(() => {
    return this.actions$.pipe(
      filter(action => action.type == '@ngrx/effects/init'),
      map((action) => webStoreStoreActions.loadProducts()),
    );
  });

  public onHomeButtonCLicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(webStoreStoreActions.onHomeButtonClicked),
      tap((action) => {
        this.router.navigate([WebStoreRoutes.HOME], { relativeTo: this.activatedRoute });
      }),
    );
  }, {
    dispatch: false //routing action is dispatched automatically
  });

  public onBasketButtonClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(webStoreStoreActions.onBasketButtonClicked),
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
      ofType(webStoreStoreActions.loadProducts),
      switchMap(res => {
        return this.productsApiService.getProducts().pipe(
          map((res) => {
            return webStoreStoreActions.loadProductsSuccess({ products: res });
          }),
          catchError((err, caught) => {
            webStoreStoreActions.loadProductsError({ err });
            return caught
          }))
      })
    );
  });
}
