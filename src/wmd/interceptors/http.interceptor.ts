import {
    HttpInterceptor as NgHttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, ObservableInput, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';
import { Injectable } from '@angular/core';

/**
 * @service HttpInterceptor
 * @description Configures the HTTP middleware handler globally.
 * @param _ngxNotifierService Injected 3RD party notifications library.
 */
@Injectable({
    providedIn: 'root'
})
export class HttpInterceptor implements NgHttpInterceptor {
    constructor(private _notificationsService: NotificationsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            withCredentials: true,
        });
        const handler = next.handle(request);

        // Catch network errors.
        return handler.pipe(
            catchError((error: HttpErrorResponse): ObservableInput<any> => {
                if (error && (error.status >= 200 && error.status < 400)) {
                    this._notificationsService.success('Success!');
                } else {
                    // Error condition here.
                    this._notificationsService.error('An error has occured.');
                }

                return throwError(error);
            }),
            // Catch HTTP success and error conditions.
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.status >= 200 && event.status < 400) {
                        /**
                         * This will show a toast after every succes.
                         * Since this is probably not desirable behavior,
                         * depend on each implementation to fire success
                         * messages to the user.
                         */
                        // this._notificationsService.success('Success!');
                    } else {
                        this._notificationsService.warn('Hmm..');
                    }
                }
                return event;
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    this._notificationsService.error('An error has occured.');
                }
            }));
    }
}
