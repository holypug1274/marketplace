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
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BasketAdapterAbstract } from '@marketplace/web-store/data-access/basket';
import { BasketAdapter, CheckoutAdapter, HomeAdapter, SharedStoreEffects, SuccessAdapter } from '@marketplace/web-store/data-access/shared';
import { HomeAdapterAbstract } from '@marketplace/web-store/data-access/home';
import { BasketSessionStorageService, spinnerInterceptor } from '@marketplace/web-store/utils';
import { CheckoutAdapterAbstract } from '@marketplace/web-store/data-access/checkout';
import { provideToastr } from 'ngx-toastr';
import { SuccessAdapterAbstract } from '@marketplace/web-store/data-access/success';

const ANGULAR = [
  provideHttpClient(withInterceptors([spinnerInterceptor])),
  provideAnimations(),
  provideToastr({
    timeOut: 1500,
    positionClass: 'toast-top-center',
    preventDuplicates: false,
  }),
  BasketSessionStorageService
];

const ADAPTERS = [
  { provide: BasketAdapterAbstract, useClass: BasketAdapter },
  { provide: HomeAdapterAbstract, useClass: HomeAdapter },
  { provide: CheckoutAdapterAbstract, useClass: CheckoutAdapter },
  { provide: SuccessAdapterAbstract, useClass: SuccessAdapter }
];

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
