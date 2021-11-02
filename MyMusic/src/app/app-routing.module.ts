import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoinComponent } from './join/join.component';
import { PostsComponent } from './posts/posts.compoent';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
