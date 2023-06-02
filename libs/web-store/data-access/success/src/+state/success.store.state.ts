export interface SuccessStoreState {
  orderNumber: string;
  totalPrice: number;
}

export const successStoreInitialState: SuccessStoreState = {
  orderNumber: '',
  totalPrice: 0
};
