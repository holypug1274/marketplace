

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
    return combineLatest([this.store.products$, this.store.displayedColumns$, this.store.totalPrice$, this.store.isEdit$, this.store.useBoxShadow$]).pipe(
      map(([products, displayedColumns, totalPrice, isEdit, useBoxShadow]) => {
        return { products, displayedColumns, totalPrice, isEdit, useBoxShadow }
      }))
  }

  public setProducts(products: ProductSummary[]): void {
    this.store.setProducts(products)
  }

  public setIsEdit(isEdit: boolean): void {
    this.store.setIsEdit(isEdit)
  }

  public setUseBoxShadow(useBoxShadow: boolean): void {
    this.store.setUseBoxShadow(useBoxShadow)
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
