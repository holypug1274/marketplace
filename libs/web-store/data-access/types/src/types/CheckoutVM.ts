import { FormControl, FormGroup } from "@angular/forms";
import { ProductSummary } from "./ProductSummary";

export interface ShippingAddressForm {
  customer: FormControl;
  customerName: FormControl;
  line1: FormControl;
  line2: FormControl;
  line3: FormControl;
  state: FormControl;
  postcode: FormControl;
  country: FormControl;
}

export interface CheckoutVM {
  products: ProductSummary[];
  shippingAddress: FormGroup;
  billingAddress: FormGroup;
  paymentDetails: FormGroup;
}
