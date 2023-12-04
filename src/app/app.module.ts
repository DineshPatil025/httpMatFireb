import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PostsComponent } from './shared/component/posts/posts.component';
import { PostsDashComponent } from './shared/component/posts-dash/posts-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsFormComponent } from './shared/component/posts-form/posts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDashComponent,
    PostsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
