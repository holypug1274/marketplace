import { ProductSummary } from '@marketplace/web-store/data-access/types';

export interface BasketStoreState {
  products: ProductSummary[];
  totalPrice: number;
}

export const basketStoreInitialState: BasketStoreState = {
  products: [],
  totalPrice: 0
};
