// import { HomeStoreState, homeStoreInitialState } from '@marketplace/web-store/data-access/home';
import { RouterReducerState } from '@ngrx/router-store';

export interface WebStoreStoreState {
  router?: RouterReducerState;
}

export const webStoreStoreInitialState: WebStoreStoreState = {
};
