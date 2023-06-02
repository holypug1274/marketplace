import { createAction, props } from '@ngrx/store';

export const successStoreActionsDescription = {
  totalPriceLoaded: '[Success Component] Total Price Loaded',
  onGoHomeClicked: '[Success Component] Increase Product Quantity Clicked',
};

export const successStoreActions = {
  totalPriceLoaded: createAction(successStoreActionsDescription.totalPriceLoaded, props<{ totalPrice: number }>()),
  onGoHomeClicked: createAction(successStoreActionsDescription.onGoHomeClicked),
};
