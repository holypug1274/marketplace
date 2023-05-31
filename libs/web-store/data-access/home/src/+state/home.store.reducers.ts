import { homeStoreActions } from './home.store.actions';
import {
  createReducer,
  on
} from '@ngrx/store';
import { homeStoreInitialState } from './home.store.state';

export const homeStoreReducers = createReducer(
  homeStoreInitialState,
  on(homeStoreActions.onAddToBasketClicked, (state, {
    product
  }) => {
    return {
      ...state, lastProductClicked: product
    };
  }),
);
