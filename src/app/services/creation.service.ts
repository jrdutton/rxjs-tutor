import { Injectable } from '@angular/core';
import { from, Observable, of, Subscriber, TeardownLogic } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreationService {
  // Emits numbers in sequence when subscribed to.
  numberSource$ = of(1, 2, 3, 4, 5);

  // Emits types in sequence when subscribed to.
  typeSource$ = of(1, 'Hello', () => 'hello');

  // Emits array elements in sequence when subscribed to.
  arraySource$ = from([1, 2, 3, 4, 5]);

  // Emits string characters in sequence when subscribed to.
  characterSource$ = from('Hello');

  // Creates a new observable with a function that is called when the observable is initially subscribed to.
  simple1$ = new Observable(function(
    this: Observable<string>,
    observer: Subscriber<string>
  ): TeardownLogic {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  // Creates a new observable with a function that is called when the observable is initially subscribed to.
  simple2$ = Observable.create(function(observer) {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });
}
