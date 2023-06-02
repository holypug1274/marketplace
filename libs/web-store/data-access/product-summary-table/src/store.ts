import { Injectable } from '@angular/core';
import { ProductSummary } from '@marketplace/web-store/data-access/types';
import { getTotalProductsSummaryPrice } from '@marketplace/web-store/utils';
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from 'rxjs';

export interface ProductSummaryTableStoreState {
  products: ProductSummary[];
  displayedColumns: string[];
  isEdit: boolean;
  totalPrice: number;
  useBoxShadow: boolean;
}

const isEditColumns: string[] = ['image', 'title', 'quantity', 'actions', 'price-per-unit', 'price'];
const defaultColumns: string[] = ['image', 'title', 'quantity', 'price-per-unit', 'price'];

export const initialState: ProductSummaryTableStoreState = {
  products: [],
  displayedColumns: defaultColumns,
  isEdit: false,
  totalPrice: 0,
  useBoxShadow: true
}

@Injectable()
export class ProductSummaryTableStore extends ComponentStore<ProductSummaryTableStoreState> {
  constructor() {
    super(initialState);
  }

  // SELECTORS

  readonly products$: Observable<ProductSummary[]> = this.select(state => state.products);
  readonly isEdit$: Observable<boolean> = this.select(state => state.isEdit);
  readonly displayedColumns$: Observable<string[]> = this.select(state => state.displayedColumns);
  readonly totalPrice$: Observable<number> = this.select(state => state.totalPrice);
  readonly useBoxShadow$: Observable<boolean> = this.select(state => state.useBoxShadow);

  // REDUCER

  readonly setProducts = this.updater((state, products: ProductSummary[]) => ({
    ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
  }));

  readonly setIsEdit = this.updater((state, isEdit: boolean) => ({
    ...state, isEdit, displayedColumns: isEdit ? isEditColumns : defaultColumns
  }));

  readonly setUseBoxShadow = this.updater((state, useBoxShadow: boolean) => ({
    ...state, useBoxShadow
  }));

  readonly decreaseProductQuantityClicked = this.updater((state, product: ProductSummary) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products[index].quantity == 1 ? products.splice(index, 1) : products[index] = { ...products[index], quantity: products[index].quantity - 1 };

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  });

  readonly increaseProductQuantityClicked = this.updater((state, product: ProductSummary) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products[index] = { ...products[index], quantity: products[index].quantity + 1 };

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  });

  readonly removeProductClicked = this.updater((state, product: ProductSummary) => {
    const products = [...state.products];

    const index = products.findIndex(prod => prod.id == product.id);
    products.splice(index, 1);

    return {
      ...state, products, totalPrice: getTotalProductsSummaryPrice(products)
    };
  });
}
