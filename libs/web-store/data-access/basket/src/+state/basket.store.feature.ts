import { createFeature } from '@ngrx/store';
import { basketStoreReducers } from './basket.store.reducers';

export const basketStoreFeatureKey = 'basket';

export const basketStoreFeature = createFeature({
  name: basketStoreFeatureKey,
  reducer: basketStoreReducers
});
