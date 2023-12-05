import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, finalize, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostsInterceptorService implements HttpInterceptor {


  private unSubscribeAll$ :Subject<void> = new Subject();
  unSubscribeAllAsObs = this.unSubscribeAll$.asObservable();

  private _loaderService = inject(LoaderService)
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.sendLoaderState(true)
    return next.handle(req)
    .pipe(
      takeUntil(this.unSubscribeAll$),
      finalize(() => {
        this._loaderService.sendLoaderState(false)
      })
    )
  }

  unSubscribeAll(){
    this.unSubscribeAll$.next()
    this.unSubscribeAll$.complete()
  }
}
