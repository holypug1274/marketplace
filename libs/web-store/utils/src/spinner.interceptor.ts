
import { inject } from '@angular/core';
import {
  HttpInterceptorFn
} from '@angular/common/http';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';


export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService: SpinnerService = inject(SpinnerService)

  spinnerService.show();

  return next(req).pipe(
    delay(5000),
    finalize(() => spinnerService.hide())
  );

}
