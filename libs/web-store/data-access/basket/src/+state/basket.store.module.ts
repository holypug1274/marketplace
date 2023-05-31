import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BasketStoreEffects } from './basket.store.effects';
import { EffectsModule } from '@ngrx/effects';
import { basketStoreFeature } from './basket.store.feature';

@NgModule({
  imports: [
    StoreModule.forFeature(basketStoreFeature),
    EffectsModule.forFeature([BasketStoreEffects])
  ],

})
export class HomeStoreModule { }
