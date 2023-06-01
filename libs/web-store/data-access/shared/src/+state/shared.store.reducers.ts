import { sharedStoreActions } from './shared.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { initialSharedStoreState } from './shared.store.state';

export const sharedStoreReducer = createReducer(
  initialSharedStoreState,
  on(sharedStoreActions.loadProductsSuccess, (state, {
    products
  }) => {
    return {
      ...state, products
    };
  }),
);
