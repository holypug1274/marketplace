import { Product } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const webStoreStoreActionsDescription = {
  onHomeButtonClicked: '[Web Store] Home Button Clicked',
  onBasketButtonClicked: '[Web Store] Basket Button Clicked',
  loadProducts: '[Home Component] Load Products',
  loadProductsSuccess: '[Home Component] Load Products Success',
  loadProductsError: '[Home Component] Load Products Error',
};

export const webStoreStoreActions = {
  onHomeButtonClicked: createAction(webStoreStoreActionsDescription.onHomeButtonClicked),
  onBasketButtonClicked: createAction(webStoreStoreActionsDescription.onBasketButtonClicked),
  loadProducts: createAction(webStoreStoreActionsDescription.loadProducts),
  loadProductsSuccess: createAction(webStoreStoreActionsDescription.loadProductsSuccess, props<{ products: Product[] }>()),
  loadProductsError: createAction(webStoreStoreActionsDescription.loadProductsError, props<{ err: Error }>()),
};
