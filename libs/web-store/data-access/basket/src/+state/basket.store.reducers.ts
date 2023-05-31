import { basketStoreActions } from './basket.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { basketStoreInitialState } from './basket.store.state';

export const basketStoreReducers = createReducer(
  basketStoreInitialState,
  on(basketStoreActions.onDecreaseProductQuantityClicked, (state, {
    product
  }) => {
    const products = state.products;

    const index = products.findIndex(prod => prod.id == product.id);
    products[index].quantity == 1 ? products.splice(index, 1) : products[index].quantity--;

    return {
      ...state, products
    };
  }),
  on(basketStoreActions.onIncreaseProductQuantityClicked, (state, {
    product
  }) => {
    const products = state.products;

    const index = products.findIndex(prod => prod.id == product.id);
    products[index].quantity++;

    return {
      ...state, products
    };
  }),
  on(basketStoreActions.onRemoveProductClicked, (state, {
    product
  }) => {
    const products = state.products;

    const index = products.findIndex(prod => prod.id == product.id);
    products.splice(index, 1);

    return {
      ...state, products
    };
  }),
  on(basketStoreActions.onClearBasketClicked, (state) => {
    return {
      ...state, products: []
    };
  }),
);
