import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDashComponent } from './shared/component/posts-dash/posts-dash.component';

const routes: Routes = [
  {path:"", component: PostsDashComponent},
  {path:"posts", component: PostsDashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
