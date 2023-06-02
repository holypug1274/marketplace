
import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

// TODO the intercept doesn't work as expected
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private spinnerService: SpinnerService = inject(SpinnerService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    return next.handle(request).pipe(
      delay(500),
      finalize(() => this.spinnerService.hide())
    );
  }
}
