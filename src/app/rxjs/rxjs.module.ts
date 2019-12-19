import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faDesktop, faHdd, faKeyboard, faLaptop, faMicrochip, faPause, faPowerOff, faSave } from '@fortawesome/free-solid-svg-icons';
import { CombinationComponent } from './combination/combination.component';
import { FilteringComponent } from './filtering/filtering.component';
import { BaseComponent } from './operators/base/base.component';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join.component';
import { IntervalComponent } from './operators/interval/interval.component';
import { WithLatestFromComponent } from './operators/with-latest-from/with-latest-from.component';
import { ZipComponent } from './operators/zip/zip.component';
import { TransformationComponent } from './transformation/transformation.component';

@NgModule({
  declarations: [
    CombineLatestComponent,
    WithLatestFromComponent,
    ZipComponent,
    BaseComponent,
    ForkJoinComponent,
    CombinationComponent,
    TransformationComponent,
    FilteringComponent,
    IntervalComponent
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule]
})
export class RxjsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faDatabase);
    library.addIcons(faDesktop);
    library.addIcons(faHdd);
    library.addIcons(faKeyboard);
    library.addIcons(faLaptop);
    library.addIcons(faMicrochip);
    library.addIcons(faPowerOff);
    library.addIcons(faSave);
    library.addIcons(faPause);
  }
}
