import { createFeature } from '@ngrx/store';
import { homeStoreReducers } from './home.store.reducers';

export const homeStoreFeatureKey = 'home';

export const homeStoreFeature = createFeature({
	name: homeStoreFeatureKey,
	reducer: homeStoreReducers
});