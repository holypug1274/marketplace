import { Injectable, inject } from '@angular/core';
import {
  Actions, createEffect, ofType
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  map, tap
} from 'rxjs/operators';
import { successStoreActions } from './success.store.actions';
import { SuccessStoreState } from './success.store.state';
import { SuccessAdapterAbstract } from './success.adapter.abstract';

@Injectable()
export class SuccessStoreEffects {
  private actions$: Actions = inject(Actions);
  private store: Store<SuccessStoreState> = inject(Store<SuccessStoreState>);
  private adapter: SuccessAdapterAbstract = inject(SuccessAdapterAbstract);

  public listenProducts$ = createEffect(() => {
    return this.adapter.listenTotalPrice().pipe(
      map((totalPrice) => {
        return successStoreActions.totalPriceLoaded({ totalPrice })
      })
    )
  })

  public onDecreaseProductQuantityClicked$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(successStoreActions.onGoHomeClicked),
      tap((action) => {
        this.adapter.onGoHomeClicked()
      }),
    );
  }, {
    dispatch: false
  });
}
