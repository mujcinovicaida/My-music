import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { PostsComponent } from './posts/posts.compoent';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JoinComponent } from './join/join.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
