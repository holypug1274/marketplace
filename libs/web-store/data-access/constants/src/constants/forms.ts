import { Validators } from "@angular/forms";
import { FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

//TODO validators doesn't work as expected

export function creditCardNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = (/^[0-9]{16}$/.test(control.value));
    return isValid ? null : { 'creditCardNumber': true };
  };
}

export function creditCardExpiringDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = (/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(control.value));
    return isValid ? null : { 'creditCardExpiringDate': true };
  };
}

export function creditCardCvvValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = (/^[0-9]{3}$/.test(control.value));
    return isValid ? null : { 'creditCardCVV': true };
  };
}

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
  ccNumber: new FormControl('', [Validators.required, creditCardNumberValidator()]),
  expDate: new FormControl('', [Validators.required, creditCardExpiringDateValidator()]),
  cvcCode: new FormControl('', [Validators.required, creditCardCvvValidator()]),
})
