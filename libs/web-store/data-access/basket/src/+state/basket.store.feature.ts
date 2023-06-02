import { createFeature } from '@ngrx/store';
import { basketStoreReducer } from './basket.store.reducer';

export const basketStoreFeatureKey = 'basket';

export const basketStoreFeature = createFeature({
  name: basketStoreFeatureKey,
  reducer: basketStoreReducer
});
