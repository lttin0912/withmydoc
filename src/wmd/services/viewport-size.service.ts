import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportSizeService {
  breakpoints = Breakpoints;
  constructor(private breakpointObserver: BreakpointObserver) {}
  watch(): Observable<BreakpointState> {
    return this.breakpointObserver.observe([
      this.breakpoints.XSmall,
      this.breakpoints.Small,
      this.breakpoints.Medium,
      this.breakpoints.Large,
      this.breakpoints.XLarge
    ]);
  }
}
