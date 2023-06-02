import { CheckoutForm, ProductSummary } from '@marketplace/web-store/data-access/types';

export interface CheckoutStoreState {
  products: ProductSummary[];
  checkoutForm: CheckoutForm;
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
  }
};
