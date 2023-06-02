import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutFacadeService } from './checkout.facade.service';
import { ProductSummaryTableComponent } from '@marketplace/web-store/ui/product-summary-table';
import { Observable } from 'rxjs';
import { CheckoutVM } from '@marketplace/web-store/data-access/types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingAddressFormComponent } from '@marketplace/web-store/ui/shipping-address-form'
import { BillingAddressFormComponent } from '@marketplace/web-store/ui/billing-address-form'
import { PaymentDetailsFormComponent } from '@marketplace/web-store/ui/payment-details-form';

@Component({
  selector: 'marketplace-checkout',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonModule, ProductSummaryTableComponent, FormsModule, ReactiveFormsModule, ShippingAddressFormComponent, BillingAddressFormComponent, PaymentDetailsFormComponent],
  providers: [CheckoutFacadeService],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  private facadeService: CheckoutFacadeService = inject(CheckoutFacadeService);

  public vm$: Observable<CheckoutVM> = this.facadeService.getVm();

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  public confirmOrderSummary(): void { }

  public goBackToOrderSummary(): void { }
  public confirmCustomerInformation(): void { }

  public goBackToConfirmCustomerInformation(): void { }
  public proceedToPayment(): void {
    this.facadeService.proceedToPaymentClicked()
  }

  public cancelOrder(): void { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
