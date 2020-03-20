import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudenClassListComponent } from './studen-class-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student-Class'
    },
    children: [
      {
        path: 'list',
        component: StudenClassListComponent,
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
export class StudenRoutingModule {}
