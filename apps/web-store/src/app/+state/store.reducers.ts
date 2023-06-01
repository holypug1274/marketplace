import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { WebStoreStoreState } from './store.state';
import { sharedStoreReducer } from '@marketplace/web-store/data-access/shared';

export const webStoreStoreReducers: ActionReducerMap<WebStoreStoreState> = {
  router: routerReducer,
  shared: sharedStoreReducer
};

export const metaReducers: MetaReducer<WebStoreStoreState>[] = [];
