import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { webStoreStoreReducers } from './+state/store.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { AccountsStoreEffects } from './+state/store.effects';
import { provideHttpClient } from '@angular/common/http';
import { BasketAdapterAbstract } from '@marketplace/web-store/data-access/basket';
import { BasketAdapter, CheckoutAdapter, HomeAdapter, SharedStoreEffects } from '@marketplace/web-store/data-access/shared';
import { HomeAdapterAbstract } from '@marketplace/web-store/data-access/home';
import { BasketSessionStorageService } from '@marketplace/web-store/utils';
import { CheckoutAdapterAbstract } from '@marketplace/web-store/data-access/checkout';

const ANGULAR = [provideHttpClient(), provideAnimations(), BasketSessionStorageService];

const ADAPTERS = [{ provide: BasketAdapterAbstract, useClass: BasketAdapter }, { provide: HomeAdapterAbstract, useClass: HomeAdapter }, { provide: CheckoutAdapterAbstract, useClass: CheckoutAdapter }];

const ROUTER = [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())];

const STORE = [
  provideStore(webStoreStoreReducers),
  provideEffects(SharedStoreEffects),
  provideStoreDevtools()
];

export const appConfig: ApplicationConfig = {
  providers: [
    ...ANGULAR,
    ...ADAPTERS,
    ...STORE,
    ...ROUTER,
  ]
};
