import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Store<T> {
  public state$ = new Subject<T>();

  initialValue(value: T) {
    this.state$.next(value);
  }

  constructor() {}
}
