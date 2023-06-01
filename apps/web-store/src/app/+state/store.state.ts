// import { HomeStoreState, homeStoreInitialState } from '@marketplace/web-store/data-access/home';
import { RouterReducerState } from '@ngrx/router-store';
import { SharedStoreState, initialSharedStoreState } from '@marketplace/web-store/data-access/shared'


export interface WebStoreStoreState {
  router?: RouterReducerState;
  shared: SharedStoreState
}

export const webStoreStoreInitialState: WebStoreStoreState = {
  shared: initialSharedStoreState
};
