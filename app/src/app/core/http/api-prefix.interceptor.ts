import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication/authentication.service';
import { environment } from '@env/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cred: any = sessionStorage.getItem('credentials') || '{}';
    cred = JSON.parse(cred);
    request = request.clone({
      url: environment.serverUrl + request.url,
      setHeaders: {
        'Authorization': 'Bearer ' + cred.token || ''
      }
    });
    return next.handle(request);
  }

}
