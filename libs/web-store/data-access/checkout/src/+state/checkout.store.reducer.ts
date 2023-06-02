import { checkoutStoreActions } from './checkout.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { checkoutStoreInitialState } from './checkout.store.state';

export const checkoutStoreReducer = createReducer(
  checkoutStoreInitialState,
  on(checkoutStoreActions.productsLoaded, (state, { products }) => {
    return {
      ...state,
      products
    };
  })
);
