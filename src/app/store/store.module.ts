import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleStoreComponent } from './simple-store/simple-store.component';
import { SimpleStoreObserverComponent } from './simple-store-observer/simple-store-observer.component';

@NgModule({
  declarations: [SimpleStoreComponent, SimpleStoreObserverComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class StoreModule {}
