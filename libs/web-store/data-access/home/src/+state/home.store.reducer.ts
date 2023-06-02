import { homeStoreActions } from './home.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { homeStoreInitialState } from './home.store.state';

export const homeStoreReducer = createReducer(
  homeStoreInitialState,
  on(homeStoreActions.productsLoaded, (state, { products }) => {
    return {
      ...state, products
    };
  }),
  on(homeStoreActions.onAddToBasketClicked, (state, {
    product
  }) => {
    return {
      ...state, lastProductClicked: product
    };
  }),
);
