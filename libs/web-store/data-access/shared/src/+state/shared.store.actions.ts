import { Product } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const sharedStoreActionsDescription = {
  onHomeButtonClicked: '[Web Store] Home Button Clicked',
  onBasketButtonClicked: '[Web Store] Basket Button Clicked',
  loadProducts: '[Home Component] Load Products',
  loadProductsSuccess: '[Home Component] Load Products Success',
  loadProductsError: '[Home Component] Load Products Error',
};

export const sharedStoreActions = {
  onHomeButtonClicked: createAction(sharedStoreActionsDescription.onHomeButtonClicked),
  onBasketButtonClicked: createAction(sharedStoreActionsDescription.onBasketButtonClicked),
  loadProducts: createAction(sharedStoreActionsDescription.loadProducts),
  loadProductsSuccess: createAction(sharedStoreActionsDescription.loadProductsSuccess, props<{ products: Product[] }>()),
  loadProductsError: createAction(sharedStoreActionsDescription.loadProductsError, props<{ err: Error }>()),
};
