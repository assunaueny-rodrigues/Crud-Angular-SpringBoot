import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive()
export class SubscriptionManager implements OnDestroy {
  private alive$ = new Subject<void>();

  takeUntilAlive = <T>(observer$: Observable<T>) =>
    observer$.pipe(takeUntil<T>(this.alive$));

  destroy(): void {
    this.alive$.next();
    this.alive$.complete();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
