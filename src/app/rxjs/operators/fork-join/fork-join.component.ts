import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements AfterViewInit {
  @ViewChild(BaseComponent, { static: true }) baseComponent: BaseComponent;

  constructor() {}

  ngAfterViewInit(): void {
    forkJoin(this.baseComponent.color$, this.baseComponent.icon$).subscribe({
      next: ([color, icon]) => {
        this.baseComponent.colorOut = color;
        this.baseComponent.iconOut = icon;
      }
    });
  }

  public complete() {
    this.baseComponent.complete();
  }
}
