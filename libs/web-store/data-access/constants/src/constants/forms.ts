import { Validators } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { ShippingAddressForm } from "@marketplace/web-store/data-access/types";

export const shippingAddressForm = new FormGroup({
  customerName: new FormControl('', [Validators.required]),
  line1: new FormControl('', [Validators.required]),
  line2: new FormControl(''),
  line3: new FormControl(''),
  state: new FormControl(''),
  postcode: new FormControl('', [Validators.required]),
  country: new FormControl('', [Validators.required]),
  isBillingAddressTheSame: new FormControl(true),
})

export const billingAddressForm = new FormGroup({
  line1: new FormControl('', [Validators.required]),
  line2: new FormControl(''),
  line3: new FormControl(''),
  state: new FormControl(''),
  postcode: new FormControl('', [Validators.required]),
  country: new FormControl('', [Validators.required]),
})

export const paymentDetailsForm = new FormGroup({
  ccNumber: new FormControl('', [Validators.required]),
  expDate: new FormControl('', [Validators.required]),
  cvcCode: new FormControl('', [Validators.required]),
})
