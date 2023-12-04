import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostsFormComponent } from '../posts-form/posts-form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post !: Ipost;
  @Output() emitPost: EventEmitter<Ipost> = new EventEmitter()


  private _postsService = inject(PostsService)
  constructor() {


  }

  ngOnInit(): void {

  }
  onPostEdit() {
    this.emitPost.emit(this.post)
    console.log(this.post);

  }

  onDelete() {
    console.log("delete clicked");
    if (confirm("Are you sure ??")) {
      this._postsService.onPostDelete(this.post.postId!)
    }
  }
}
