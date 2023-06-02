import { Basket, Product } from "@marketplace/web-store/data-access/types"

export interface SharedStoreState {
  products: Product[],
  basket: Basket
}

export const initialSharedStoreState: SharedStoreState = {
  products: [],
  basket: { products: {} }
}
