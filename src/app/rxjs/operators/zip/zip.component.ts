import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { zip } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements AfterViewInit {
  @ViewChild(BaseComponent, { static: true }) baseComponent: BaseComponent;

  constructor() {}

  ngAfterViewInit(): void {
    zip(this.baseComponent.color$, this.baseComponent.icon$).subscribe({
      next: ([color, icon]) => {
        this.baseComponent.colorOut = color;
        this.baseComponent.iconOut = icon;
      }
    });
  }
}
