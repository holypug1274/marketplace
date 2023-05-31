import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HomeStoreEffects } from './home.store.effects';
import { EffectsModule } from '@ngrx/effects';
import { homeStoreFeature } from './home.store.feature';

@NgModule({
	imports: [
		StoreModule.forFeature(homeStoreFeature),
		EffectsModule.forFeature([HomeStoreEffects])
	],

})
export class HomeStoreModule { }
