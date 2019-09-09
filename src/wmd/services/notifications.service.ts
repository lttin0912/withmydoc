import { Injectable } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';


/**
 * @service NotifcationsService
 * @description Provides a common utility to display formatted messages to the user.
 * @param _ngxNotifierService Injected 3RD party notifications library.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _defaultDisplayDuration = 1500;

  constructor(
    private _ngxNotifierService: NgxNotifierService
  ) {}

  /**
   * @method success
   * @param message The message to display the user.
   * @param timeout [optional] The timeout for the notification to display.
   */
  success(message: string, timeout?: number): void {
    this._ngxNotifierService.createToast(
      message,
      'success',
      timeout || this._defaultDisplayDuration
    );
  }

  /**
   * @method info
   * @param message The message to display the user.
   * @param timeout [optional] The timeout for the notification to display.
   */
  info(message: string, timeout?: number): void {
    this._ngxNotifierService.createToast(
      message,
      'info',
      timeout || this._defaultDisplayDuration
    );
  }

  /**
   * @method warn
   * @param message The message to display the user.
   * @param timeout [optional] The timeout for the notification to display.
   */
  warn(message: string, timeout?: number): void {
    this._ngxNotifierService.createToast(
      message,
      'warn',
      timeout || this._defaultDisplayDuration
    );
  }

  /**
   * @method error
   * @param message The message to display the user.
   * @param timeout [optional] The timeout for the notification to display.
   */
  error(message: string, timeout?: number): void {
    this._ngxNotifierService.createToast(
      message,
      'danger',
      timeout || this._defaultDisplayDuration
    );
  }
}
