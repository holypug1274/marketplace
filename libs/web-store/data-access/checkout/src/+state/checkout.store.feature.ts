import { createFeature } from '@ngrx/store';
import { checkoutStoreReducer } from './checkout.store.reducer';

export const checkoutStoreFeatureKey = 'checkout';

export const checkoutStoreFeature = createFeature({
  name: checkoutStoreFeatureKey,
  reducer: checkoutStoreReducer
});
