import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BasketVM, ProductSummary } from '@marketplace/web-store/data-access/types';
import { BasketFacadeService } from './basket.facade.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ProductSummaryTableComponent } from '@marketplace/web-store/ui/product-summary-table'

@Component({
  selector: 'marketplace-basket',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, ProductSummaryTableComponent],
  providers: [BasketFacadeService],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  public facadeService: BasketFacadeService = inject(BasketFacadeService)

  public vm$: Observable<BasketVM> = this.facadeService.getVm();
  // displayedColumns: string[] = ['image', 'id', 'title', 'quantity', 'actions', 'price-per-unit', 'price'];

  public checkoutClicked(): void {
    this.facadeService.checkoutClicked()
  }

  public clearBasketClicked(): void {
    this.facadeService.clearBasketClicked()
  }

  public decreaseProductQuantityClicked(product: ProductSummary): void {
    this.facadeService.decreaseProductQuantityClicked(product)
  }

  public increaseProductQuantityClicked(product: ProductSummary): void {
    this.facadeService.increaseProductQuantityClicked(product)
  }

  public removeProductClicked(product: ProductSummary): void {
    this.facadeService.removeProductClicked(product)
  }

  public checkoutTheStoreClicked(): void {
    this.facadeService.checkoutTheStoreClicked()
  }
}
