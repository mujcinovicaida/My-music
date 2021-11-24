import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoinComponent } from './join/join.component';
import { PostsComponent } from './posts/posts.compoent';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'join',
    component: JoinComponent
  },
  {
    path:'update',
    component: UpdateComponent
  },
  {
    path:'add',
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
