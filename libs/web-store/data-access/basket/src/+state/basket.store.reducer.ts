import { basketStoreActions } from './basket.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { basketStoreInitialState } from './basket.store.state';
import { getTotalProductsSummaryPrice } from '@marketplace/web-store/utils';

export const basketStoreReducer = createReducer(
  basketStoreInitialState,
  on(basketStoreActions.productsLoaded, (state, { products }) => {
    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  }),
  on(basketStoreActions.onDecreaseProductQuantityClicked, (state, {
    product
  }) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products[index].quantity == 1 ? products.splice(index, 1) : products[index] = { ...products[index], quantity: products[index].quantity - 1 };

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  }),
  on(basketStoreActions.onIncreaseProductQuantityClicked, (state, {
    product
  }) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products[index] = { ...products[index], quantity: products[index].quantity + 1 };

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  }),
  on(basketStoreActions.onRemoveProductClicked, (state, {
    product
  }) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products.splice(index, 1);

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  }),
  on(basketStoreActions.onClearBasketClicked, (state) => {
    return {
      ...state, products: [], totalPrice: getTotalProductsSummaryPrice([])
    };
  }),
);
