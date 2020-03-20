import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { ChaptersComponent } from './chapters-list.component';
import { ChaptersRoutingModule } from './chapters-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule,ChaptersRoutingModule],
  declarations: [ChaptersComponent]
})
export class ChaptersModule {}
