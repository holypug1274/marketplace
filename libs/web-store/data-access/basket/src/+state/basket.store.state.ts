import { ProductSummary } from '@marketplace/web-store/data-access/types';

export interface BasketStoreState {
  products: ProductSummary[];
}

export const basketStoreInitialState: BasketStoreState = {
  products: []
};
