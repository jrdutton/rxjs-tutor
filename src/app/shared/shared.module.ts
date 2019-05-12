import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextBoxComponent } from './controls/text-box/text-box.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent, TextBoxComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavigationComponent, TextBoxComponent]
})
export class SharedModule {}
