import { checkoutStoreActions } from './checkout.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { checkoutStoreInitialState } from './checkout.store.state';
import { getBillingAddressForm, getPaymentDetailsForm, getShippingAddressForm } from '@marketplace/web-store/utils';

export const checkoutStoreReducer = createReducer(
  checkoutStoreInitialState,
  on(checkoutStoreActions.productsLoaded, (state, { products }) => {
    return {
      ...state,
      products,
      // shippingAddress: getShippingAddressForm(),
      // billingAddress: getBillingAddressForm(),
      // paymentDetails: getPaymentDetailsForm(),
    };
  })
);
