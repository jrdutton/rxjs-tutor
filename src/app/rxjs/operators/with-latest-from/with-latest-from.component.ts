import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements AfterViewInit {
  @ViewChild(BaseComponent, { static: true }) baseComponent: BaseComponent;

  constructor() {}

  ngAfterViewInit(): void {
    this.baseComponent.color$
      .pipe(withLatestFrom(this.baseComponent.icon$))
      .subscribe({
        next: ([color, icon]) => {
          this.baseComponent.colorOut = color;
          this.baseComponent.iconOut = icon;
        }
      });
  }
}
