import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/service/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(
    private readonly loadingService: LoadingService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.activeRequests += 1;
    if (this.activeRequests > 0) { this.loadingService.$isLoading.next(true); }

    return next.handle(request)
      .pipe(
        finalize(() => {
          this.activeRequests -= 1;
          if (this.activeRequests < 1) {
            this.loadingService.$isLoading.next(false);
          }
        }),
      );
  }
}
