import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostsFormComponent } from '../posts-form/posts-form.component';
import { ConfDialogComponent } from '../conf-dialog/conf-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post !: Ipost;
  @Output() emitPost: EventEmitter<Ipost> = new EventEmitter()


  private _postsService = inject(PostsService)
  constructor(private _matDialog: MatDialog) {


  }

  ngOnInit(): void {

  }
  onPostEdit() {
    this.emitPost.emit(this.post)
    console.log(this.post);

  }

  onDelete() {
    // console.log("delete clicked");
    // if (confirm("Are you sure ??")) {
      // this._postsService.onPostDelete(this.post.postId!)
    // }
    let matDialConf = new MatDialogConfig
    matDialConf.width = "300px";
    matDialConf.data = this.post;
    this._matDialog.open(ConfDialogComponent, matDialConf)
  }
}
