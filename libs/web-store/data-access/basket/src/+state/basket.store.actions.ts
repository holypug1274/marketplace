import { Product, ProductSummary } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const basketStoreActionsDescription = {
  onIncreaseProductQuantityClicked: '[Basket Component] Increase Product Quantity Clicked',
  onDecreaseProductQuantityClicked: '[Basket Component] Decrease Product Quantity Clicked',
  onRemoveProductClicked: '[Basket Component] Remove Product Clicked',
  onClearBasketClicked: '[Basket Component] Clear Basket Clicked',
  onCheckoutClicked: '[Basket Component] Checkout Clicked Clicked',
};

export const basketStoreActions = {
  onIncreaseProductQuantityClicked: createAction(basketStoreActionsDescription.onIncreaseProductQuantityClicked, props<{ product: ProductSummary }>()),
  onDecreaseProductQuantityClicked: createAction(basketStoreActionsDescription.onDecreaseProductQuantityClicked, props<{ product: ProductSummary }>()),
  onRemoveProductClicked: createAction(basketStoreActionsDescription.onRemoveProductClicked, props<{ product: ProductSummary }>()),
  onClearBasketClicked: createAction(basketStoreActionsDescription.onClearBasketClicked),
  onCheckoutClicked: createAction(basketStoreActionsDescription.onCheckoutClicked),
};
