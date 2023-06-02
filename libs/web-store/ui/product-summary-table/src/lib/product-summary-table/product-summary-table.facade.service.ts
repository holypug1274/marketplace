

import { Injectable, inject } from '@angular/core';
import { ProductSummary, ProductSummaryTableVM } from '@marketplace/web-store/data-access/types';
import { Observable, combineLatest, map } from 'rxjs';
import { ProductSummaryTableStore } from '@marketplace/web-store/data-access/product-summary-table'

@Injectable({
  providedIn: 'root'
})
export class ProductSummaryTableFacadeService {
  private store: ProductSummaryTableStore = inject(ProductSummaryTableStore)

  public getVm(): Observable<ProductSummaryTableVM> {
    return combineLatest([this.store.products$, this.store.displayedColumns$, this.store.totalPrice$, this.store.isEdit$]).pipe(
      map(([products, displayedColumns, totalPrice, isEdit]) => {
        return { products, displayedColumns, totalPrice, isEdit }
      }))
  }

  public setProducts(products: ProductSummary[]): void {
    this.store.setProducts(products)
  }

  public setIsEdit(isEdit: boolean): void {
    this.store.setIsEdit(isEdit)
  }

  public decreaseProductQuantityClicked(product: ProductSummary) {
    this.store.decreaseProductQuantityClicked(product)
  }

  public increaseProductQuantityClicked(product: ProductSummary) {
    this.store.increaseProductQuantityClicked(product)
  }

  public removeProductClicked(product: ProductSummary) {
    this.store.removeProductClicked(product)
  }
}
