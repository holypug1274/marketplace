import { successStoreActions } from './success.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { successStoreInitialState } from './success.store.state';
import { getRandomString } from '@marketplace/web-store/utils';

export const successStoreReducer = createReducer(
  successStoreInitialState,
  on(successStoreActions.totalPriceLoaded, (state, { totalPrice }) => {
    return {
      ...state, totalPrice, orderNumber: getRandomString()
    };
  }),
);
