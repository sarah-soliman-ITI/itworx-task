import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  accessToken:any;
  constructor(
    private _router: Router ,
    private http: HttpClient) { }    
  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let AccessTokenFomStrg;
    if ( AccessTokenFomStrg) {
      // update the request Parameters      
      if (request.body) {
        if (request.body["get"] != undefined && request.body.get("Isfile") == "1") {
          request = request.clone({
            setHeaders: {},
          })
          request.headers.append("Content-Type", "multipart/form-data");
        }
        else {
          request = request.clone({
            setHeaders: {},
          });
        }
      }
      else {
        request = request.clone({
          setHeaders: {},
        });
      }
    }  
    return next
      .handle(request).
      pipe(
        tap((event: any) => {
          if (event.type != 0 && event.body != null && event.body.errorCode != null && event.body.errorCode != 1)
          console.log("this is response", event);
        },
          error => {
            
            if (error.status === 401) {
            this._router.navigate(['/']);
              localStorage.clear();
            }
            else {
              throw error;
            }
            // logging the http response to browser's console in case of a failuer
            if (event instanceof HttpResponse) {
              console.log('api call error :', event);
            }
          }
        )
      );
  }


}
