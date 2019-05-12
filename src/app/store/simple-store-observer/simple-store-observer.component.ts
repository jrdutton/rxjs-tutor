import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SimpleStore } from '../simple.store';

@Component({
  selector: 'app-simple-store-observer',
  templateUrl: './simple-store-observer.component.html',
  styleUrls: ['./simple-store-observer.component.scss']
})
export class SimpleStoreObserverComponent implements OnInit, OnDestroy {
  public value = '';

  private ngUnsubscribe$: Subject<any> = new Subject();

  constructor(private simpleStore: SimpleStore) {}

  ngOnInit() {
    this.simpleStore.state$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe({
      next: value => {
        this.value = value;
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
