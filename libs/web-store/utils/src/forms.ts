import { FormGroup } from "@angular/forms";
import { billingAddressForm, paymentDetailsForm, shippingAddressForm } from "@marketplace/web-store/data-access/constants"

export function getShippingAddressForm(): FormGroup {
  return shippingAddressForm;
}
export function getBillingAddressForm(): FormGroup {
  return billingAddressForm;
}
export function getPaymentDetailsForm(): FormGroup {
  return paymentDetailsForm;
}
