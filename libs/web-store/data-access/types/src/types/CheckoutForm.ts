import { Address } from "./Address";
import { PaymentDetails } from "./PaymentDetails";

export interface CheckoutForm {
  customerName: string;
  billingAddress: Address;
  shippingAddress: Address;
  paymentDetails: PaymentDetails;
}
