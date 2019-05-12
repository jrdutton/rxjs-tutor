import { Subject } from 'rxjs';

export class Store<T> {
  public state$ = new Subject<T>();

  intialValue(value: T) {
    this.state$.next(value);
  }

  constructor() {}
}
