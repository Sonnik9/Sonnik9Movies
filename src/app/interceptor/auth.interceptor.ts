import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = '26b1cc77f5f39491709c0edd07a70706';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqClone = request.clone({
      setParams: {
        'api_key': API_KEY,
      }
    });

    return next.handle(reqClone);
  }
}
