import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { WebStoreStoreState } from './store.state';

export const webStoreStoreReducers: ActionReducerMap<WebStoreStoreState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<WebStoreStoreState>[] = [];
