import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private ser: ServiceService){}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("this is interceptor")
      const API_KEY: any = this.ser.getToken();
      return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  }
}