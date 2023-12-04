import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})


export class PostsFormComponent implements OnInit {

  postForm !: FormGroup;
  postArr !: Array<Ipost>;
  inEditMode: boolean = false;
  updObj !: Ipost;
  updateId !: string;

  private _postsService = inject(PostsService)

  constructor(
    private _matDialRef: MatDialogRef<PostsFormComponent>,
    @Inject(MAT_DIALOG_DATA) editPost: Ipost
  ) {

    this.createPostForm()
    if (editPost) {
      this.postForm.patchValue(editPost)
      this.inEditMode = true
      this.updObj = editPost
      this.updateId = editPost.postId!;
      console.log(editPost);
      
    }
  }

  ngOnInit(): void {

  }

  createPostForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required])
    })
  }
  onPostAdd() {
    let newPost = this.postForm.value;
    this._postsService.sendPostObject(newPost)
    this.postForm.reset();
    this._matDialRef.close()
  }
  onPostUpdate() {

    
    let uptdObj = this.postForm.value;
    console.log(this.updObj);
    this._postsService.senUpdateObject(uptdObj, this.updateId) 
   
    this._matDialRef.close()
  }
}
