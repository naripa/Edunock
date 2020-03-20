import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChaptersComponent } from './chapters-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Chapters'
    },
    children: [
      {
        path: 'list',
        component: ChaptersComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule {}
