import { Product, ProductSummary } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const sharedStoreActionsDescription = {
  onHomeButtonClicked: '[Web Store] Home Button Clicked',
  onBasketButtonClicked: '[Web Store] Basket Button Clicked',
  loadProducts: '[Home Component] Load Products',
  loadProductsSuccess: '[Home Component] Load Products Success',
  loadProductsError: '[Home Component] Load Products Error',

  onAddToBasketClicked: '[Web Store - Home Component] Home Button Clicked',

  onIncreaseProductQuantityClicked: '[Web Store - Basket Component] Increase Product Quantity Clicked',
  onDecreaseProductQuantityClicked: '[Web Store - Basket Component] Decrease Product Quantity Clicked',
  onRemoveProductClicked: '[Web Store - Basket Component] Remove Product Clicked',
  onClearBasketClicked: '[Web Store - Basket Component] Clear Basket Clicked',
  onCheckoutClicked: '[Web Store - Basket Component] Checkout Clicked',
  onCheckoutTheStoreClicked: '[Web Store - Basket Component] Checkout The Store Clicked',

  onProceedToPaymentButtonClicked: '[Web Store - Checkout Component] Proceed To Payment Button Clicked',
};

export const sharedStoreActions = {
  onHomeButtonClicked: createAction(sharedStoreActionsDescription.onHomeButtonClicked),
  onBasketButtonClicked: createAction(sharedStoreActionsDescription.onBasketButtonClicked),
  loadProducts: createAction(sharedStoreActionsDescription.loadProducts),
  loadProductsSuccess: createAction(sharedStoreActionsDescription.loadProductsSuccess, props<{ products: Product[] }>()),
  loadProductsError: createAction(sharedStoreActionsDescription.loadProductsError, props<{ err: Error }>()),

  onAddToBasketClicked: createAction(sharedStoreActionsDescription.onAddToBasketClicked, props<{ product: Product }>()),

  onIncreaseProductQuantityClicked: createAction(sharedStoreActionsDescription.onIncreaseProductQuantityClicked, props<{ product: ProductSummary }>()),
  onDecreaseProductQuantityClicked: createAction(sharedStoreActionsDescription.onDecreaseProductQuantityClicked, props<{ product: ProductSummary }>()),
  onRemoveProductClicked: createAction(sharedStoreActionsDescription.onRemoveProductClicked, props<{ product: ProductSummary }>()),
  onClearBasketClicked: createAction(sharedStoreActionsDescription.onClearBasketClicked),
  onCheckoutClicked: createAction(sharedStoreActionsDescription.onCheckoutClicked),
  onCheckoutTheStoreClicked: createAction(sharedStoreActionsDescription.onCheckoutTheStoreClicked),

  onProceedToPaymentButtonClicked: createAction(sharedStoreActionsDescription.onProceedToPaymentButtonClicked),
};
