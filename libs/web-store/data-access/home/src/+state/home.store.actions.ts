import { Product } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const homeStoreActionsDescription = {
  productsLoaded: '[Home Component] Products Loaded',
  onAddToBasketClicked: '[Home Component] Add To Basket Clicked',
};

export const homeStoreActions = {
  productsLoaded: createAction(homeStoreActionsDescription.productsLoaded, props<{ products: Product[] }>()),
  onAddToBasketClicked: createAction(homeStoreActionsDescription.onAddToBasketClicked, props<{ product: Product }>()),
};
