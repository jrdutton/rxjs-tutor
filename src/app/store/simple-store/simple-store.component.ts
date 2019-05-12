import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SimpleStore } from '../simple.store';

@Component({
  selector: 'app-simple-store',
  templateUrl: './simple-store.component.html',
  styleUrls: ['./simple-store.component.scss']
})
export class SimpleStoreComponent implements OnInit, OnDestroy {
  public fg = this.fb.group({
    input: this.fb.control('')
  });

  public get input() {
    return this.fg.get('input');
  }

  private ngUnsubscribe$: Subject<any> = new Subject();

  constructor(private fb: FormBuilder, private simpleStore: SimpleStore) {}

  ngOnInit() {
    this.input.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe({
      next: () => {
        this.simpleStore.state$.next(this.input.value);
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
