import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PostsComponent } from './shared/component/posts/posts.component';
import { PostsDashComponent } from './shared/component/posts-dash/posts-dash.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostsFormComponent } from './shared/component/posts-form/posts-form.component';
import { ConfDialogComponent } from './shared/component/conf-dialog/conf-dialog.component';
import { PostsInterceptorService } from './shared/services/posts-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDashComponent,
    PostsFormComponent,
    ConfDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: PostsInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
