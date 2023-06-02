import { createFeature } from '@ngrx/store';
import { successStoreReducer } from './success.store.reducer';

export const successStoreFeatureKey = 'success';

export const successStoreFeature = createFeature({
  name: successStoreFeatureKey,
  reducer: successStoreReducer
});
