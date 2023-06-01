import { createFeature } from '@ngrx/store';
import { sharedStoreReducer } from './shared.store.reducers';

export const sharedStoreFeatureKey = 'shared';

export const sharedStoreFeature = createFeature({
  name: sharedStoreFeatureKey,
  reducer: sharedStoreReducer
});
