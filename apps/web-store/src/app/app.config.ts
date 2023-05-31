import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { metaReducers, webStoreStoreReducers } from './+state/store.reducers';
import { webStoreStoreInitialState } from './+state/store.state';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AccountsStoreEffects } from './+state/store.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // StoreModule.forRoot(webStoreStoreReducers, {
    //   initialState: webStoreStoreInitialState,
    //   metaReducers
    // }),
    // EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument(),
    // StoreRouterConnectingModule.forRoot()
    provideStore(webStoreStoreReducers),
    provideEffects(AccountsStoreEffects),
    provideStoreDevtools(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
  ],
};
