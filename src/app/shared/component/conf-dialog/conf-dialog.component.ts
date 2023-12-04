import { Component, Inject, OnInit, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-conf-dialog',
  templateUrl: './conf-dialog.component.html',
  styleUrls: ['./conf-dialog.component.scss']
})
export class ConfDialogComponent implements OnInit {
 private _postService = inject(PostsService)

  

  constructor(@Inject(MAT_DIALOG_DATA) public post: Ipost) { }

  ngOnInit(): void {
  }

  

  onDelete(){
      this._postService.onPostDelete(this.post.postId!)
// 
  }

  

}
