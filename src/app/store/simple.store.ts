import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class SimpleStore extends Store<string> {}
