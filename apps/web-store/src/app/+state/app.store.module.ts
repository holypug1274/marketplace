import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { webStoreStoreReducers, metaReducers } from './store.reducers';
import { webStoreStoreInitialState } from './store.state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreModule.forRoot(webStoreStoreReducers, {
      initialState: webStoreStoreInitialState,
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot()
  ],

})
export class AppStoreModule { }
