import { Injectable ,Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
   
     let cloned=request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('api_token')}`
      }
    })
    return next.handle(cloned);
    }
    
   
  } 

