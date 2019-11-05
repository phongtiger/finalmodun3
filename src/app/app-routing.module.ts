import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {InfoComponent} from './info/info.component';


const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'info/:id',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
