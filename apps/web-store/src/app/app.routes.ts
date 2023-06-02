import { Route } from '@angular/router';
import { BasketStoreEffects, basketStoreFeature } from '@marketplace/web-store/data-access/basket';
import { CheckoutStoreEffects, checkoutStoreFeature } from '@marketplace/web-store/data-access/checkout';
import { HomeStoreEffects, homeStoreFeature } from '@marketplace/web-store/data-access/home';
import { SuccessStoreEffects, successStoreFeature } from '@marketplace/web-store/data-access/success';
import { WebStoreRoutes } from '@marketplace/web-store/data-access/types'
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
  {
    path: WebStoreRoutes.HOME,
    loadComponent: () => {
      return import('@marketplace/web-store/feature/home').then((m) => {
        return m.HomeComponent;
      });
    },
    providers: [
      provideState(homeStoreFeature),
      provideEffects(HomeStoreEffects)
    ]
  },
  {
    path: WebStoreRoutes.BASKET,
    loadComponent: () => {
      return import('@marketplace/web-store/feature/basket').then((m) => {
        return m.BasketComponent;
      });
    },
    providers: [
      provideState(basketStoreFeature),
      provideEffects(BasketStoreEffects)
    ]
  },
  {
    path: WebStoreRoutes.CHECKOUT,
    loadComponent: () => {
      return import('@marketplace/web-store/feature/checkout').then((m) => {
        return m.CheckoutComponent;
      });
    },
    providers: [
      provideState(checkoutStoreFeature),
      provideEffects(CheckoutStoreEffects)
    ]
  },
  {
    path: WebStoreRoutes.SUCCESS,
    loadComponent: () => {
      return import('@marketplace/web-store/feature/success').then((m) => {
        return m.SuccessComponent;
      });
    },
    providers: [
      provideState(successStoreFeature),
      provideEffects(SuccessStoreEffects)
    ]
  },
];
