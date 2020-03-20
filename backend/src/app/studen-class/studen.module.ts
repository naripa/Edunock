import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { StudenClassListComponent } from './studen-class-list.component';
import { StudenRoutingModule } from './studen-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule,StudenRoutingModule],
  declarations: [StudenClassListComponent]
})
export class StudenModule {}
