import { ProductSummary } from '@marketplace/web-store/data-access/types';
import { createAction, props } from '@ngrx/store';

export const checkoutStoreActionsDescription = {
  productsLoaded: '[Checkout Component] Products Loaded',
  onConfirmSummaryClicked: '[Checkout Component] Confirm Summary Clicked',
  onConfirmCustomerInformationClicked: '[Checkout Component] Confirm Customer Information Clicked',
  onProceedToPaymentClicked: '[Checkout Component] Proceed To Payment Clicked',
  onCancelOrderClicked: '[Checkout Component] Cancel Order Clicked',
};

export const checkoutStoreActions = {
  productsLoaded: createAction(checkoutStoreActionsDescription.productsLoaded, props<{ products: ProductSummary[] }>()),
  onConfirmSummaryClicked: createAction(checkoutStoreActionsDescription.onConfirmSummaryClicked),
  onConfirmCustomerInformationClicked: createAction(checkoutStoreActionsDescription.onConfirmCustomerInformationClicked),
  onProceedToPaymentClicked: createAction(checkoutStoreActionsDescription.onProceedToPaymentClicked),
  onCancelOrderClicked: createAction(checkoutStoreActionsDescription.onCancelOrderClicked)
};
