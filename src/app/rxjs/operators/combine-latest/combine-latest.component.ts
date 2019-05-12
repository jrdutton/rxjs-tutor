import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements AfterViewInit {
  @ViewChild(BaseComponent) baseComponent: BaseComponent;

  constructor() {}

  ngAfterViewInit(): void {
    combineLatest(
      this.baseComponent.color$,
      this.baseComponent.icon$
    ).subscribe({
      next: ([color, icon]) => {
        this.baseComponent.colorOut = color;
        this.baseComponent.iconOut = icon;
      }
    });
  }
}
