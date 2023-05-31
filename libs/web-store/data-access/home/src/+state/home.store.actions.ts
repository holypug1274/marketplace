import { Product } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const homeStoreActionsDescription = {
  onAddToBasketClicked: '[Home Component] Add To Basket Clicked',
};

export const homeStoreActions = {
  onAddToBasketClicked: createAction(homeStoreActionsDescription.onAddToBasketClicked, props<{ product: Product }>()),
};
