import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummaryTableFacadeService } from './product-summary-table.facade.service';
import { ProductSummary, ProductSummaryTableVM } from '@marketplace/web-store/data-access/types';
import { Observable } from 'rxjs';
import { ProductSummaryTableStore } from '@marketplace/web-store/data-access/product-summary-table';

@Component({
  selector: 'marketplace-product-summary-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDividerModule],
  providers: [ProductSummaryTableFacadeService, ProductSummaryTableStore],
  templateUrl: './product-summary-table.component.html',
  styleUrls: ['./product-summary-table.component.scss'],
})
export class ProductSummaryTableComponent {
  public facadeService: ProductSummaryTableFacadeService = inject(ProductSummaryTableFacadeService)

  public vm$: Observable<ProductSummaryTableVM> = this.facadeService.getVm();

  @Input()
  public set products(products: ProductSummary[]) {
    this.facadeService.setProducts(products)
  }

  @Input()
  public set isEdit(isEdit: boolean) {
    isEdit = isEdit ?? false;
    this.facadeService.setIsEdit(isEdit)
  }

  @Output()
  public decreaseProductQuantity: EventEmitter<ProductSummary> = new EventEmitter();

  @Output()
  public increaseProductQuantity: EventEmitter<ProductSummary> = new EventEmitter();

  @Output()
  public removeProduct: EventEmitter<ProductSummary> = new EventEmitter();

  public decreaseProductQuantityClicked(product: ProductSummary) {
    this.facadeService.decreaseProductQuantityClicked(product)
    this.decreaseProductQuantity.emit(product);
  }

  public increaseProductQuantityClicked(product: ProductSummary) {
    this.facadeService.increaseProductQuantityClicked(product)
    this.increaseProductQuantity.emit(product);
  }

  public removeProductClicked(product: ProductSummary) {
    this.facadeService.removeProductClicked(product)
    this.removeProduct.emit(product);
  }
}
