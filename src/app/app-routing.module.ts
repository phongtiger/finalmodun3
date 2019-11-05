import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {InfoComponent} from './info/info.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';


const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'info/:id',
    component: InfoComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
