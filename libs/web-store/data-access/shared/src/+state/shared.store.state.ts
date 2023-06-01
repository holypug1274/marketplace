import { Product } from "@marketplace/web-store/data-access/types"

export interface SharedStoreState {
  products: Product[]
}

export const initialSharedStoreState: SharedStoreState = {
  products: []
}
