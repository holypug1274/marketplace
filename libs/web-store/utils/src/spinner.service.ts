import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _spinner$ = new Subject<boolean>();

  spinner$ = this._spinner$.asObservable();

  show() {
    this._spinner$.next(true);
  }

  hide() {
    this._spinner$.next(false);
  }
}
