import { createFeature } from '@ngrx/store';
import { homeStoreReducer } from './home.store.reducer';

export const homeStoreFeatureKey = 'home';

export const homeStoreFeature = createFeature({
  name: homeStoreFeatureKey,
  reducer: homeStoreReducer
});
