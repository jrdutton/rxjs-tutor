import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './rxjs/combination/combination.component';
import { FilteringComponent } from './rxjs/filtering/filtering.component';
import { TransformationComponent } from './rxjs/transformation/transformation.component';
import { SimpleStoreComponent } from './store/simple-store/simple-store.component';

const routes: Routes = [
  { path: 'combination', component: CombinationComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'transformation', component: TransformationComponent },
  { path: 'simple-store', component: SimpleStoreComponent },
  {
    path: '',
    redirectTo: '/combination',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
