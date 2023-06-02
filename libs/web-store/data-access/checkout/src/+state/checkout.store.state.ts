import { FormGroup } from '@angular/forms';
import { CheckoutForm, ProductSummary } from '@marketplace/web-store/data-access/types';
import { getShippingAddressForm, getBillingAddressForm, getPaymentDetailsForm } from '@marketplace/web-store/utils';

export interface CheckoutStoreState {
  products: ProductSummary[];
  checkoutForm: CheckoutForm;
  // shippingAddress: FormGroup;
  // billingAddress: FormGroup;
  // paymentDetails: FormGroup;
}

export const checkoutStoreInitialState: CheckoutStoreState = {
  products: [],
  checkoutForm: {
    customerName: '',
    billingAddress: {
      line1: '',
      line2: '',
      line3: '',
      state: '',
      postcode: '',
      country: '',
    },
    shippingAddress: {
      line1: '',
      line2: '',
      line3: '',
      state: '',
      postcode: '',
      country: '',
    },
    paymentDetails: {
      ccNumber: '',
      expDate: new Date(),
      cvcCode: ''
    }
  },
  // shippingAddress: new FormGroup({}),
  // billingAddress: new FormGroup({}),
  // paymentDetails: new FormGroup({}),
  // shippingAddress: getShippingAddressForm(),
  // billingAddress: getBillingAddressForm(),
  // paymentDetails: getPaymentDetailsForm(),
};
