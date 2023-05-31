import { Product } from '@marketplace/web-store/data-access/types';

export interface HomeStoreState {
  products: Product[];
  lastProductClicked: Product;
}

export const homeStoreInitialState: HomeStoreState = {
  products: [],
  lastProductClicked: { id: 0 }
};
