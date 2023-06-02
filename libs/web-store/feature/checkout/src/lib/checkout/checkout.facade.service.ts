import { Injectable, inject } from '@angular/core';
import { CheckoutVM } from '@marketplace/web-store/data-access/types';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { checkoutStoreActions, checkoutStoreFeature } from '@marketplace/web-store/data-access/checkout'
import { CheckoutStoreState } from '@marketplace/web-store/data-access/checkout'
import { getBillingAddressForm, getPaymentDetailsForm, getShippingAddressForm } from '@marketplace/web-store/utils';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFacadeService {
  private store: Store<CheckoutStoreState> = inject(Store<CheckoutStoreState>)

  public getVm(): Observable<CheckoutVM> {
    return combineLatest([this.store.select(checkoutStoreFeature.selectProducts)]).pipe(
      map(([products]) => {

        const shippingAddress = getShippingAddressForm();
        const billingAddress = getBillingAddressForm();
        const paymentDetails = getPaymentDetailsForm();

        return { products, shippingAddress, billingAddress, paymentDetails }
      }))
  }

  public confirmSummaryClicked(): void {
    this.store.dispatch(checkoutStoreActions.onConfirmSummaryClicked())
  }

  public confirmCustomerInformationClicked(): void {
    this.store.dispatch(checkoutStoreActions.onConfirmCustomerInformationClicked())
  }

  public proceedToPaymentClicked(): void {
    this.store.dispatch(checkoutStoreActions.onProceedToPaymentClicked())
  }

  public cancelOrderClicked(): void {
    this.store.dispatch(checkoutStoreActions.onCancelOrderClicked())
  }
}
