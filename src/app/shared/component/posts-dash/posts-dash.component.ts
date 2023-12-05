import { Component, OnInit, inject } from '@angular/core';
import { Ipost } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PostsFormComponent } from '../posts-form/posts-form.component';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-posts-dash',
  templateUrl: './posts-dash.component.html',
  styleUrls: ['./posts-dash.component.scss']
})
export class PostsDashComponent implements OnInit {


  postsArr !: Array<Ipost>
  private _postsService = inject(PostsService);
  private _matSnackbar = inject(SnackBarService)
  constructor(private _matDialog: MatDialog) { }

  ngOnInit(): void {
    this._postsService.getAllPosts()
      .subscribe(res => {
        this.postsArr = res;

      })

      this._postsService.sendPostAsObs$
      .subscribe((res: any) => {
        this.postsArr.unshift(res)
        console.log(this.postsArr);
        
      })

      this._postsService.sendUpdPostAsObs$
      .subscribe((res: any) => {
        console.log("update called",res);
        

        let findIndex = this.postsArr.findIndex(post => {return post.postId === res.postId})
        this.postsArr[findIndex] = res;
        
      })

      this._postsService.sendUpdDeltAsObs$
          .subscribe(postId =>{
            this.postsArr = this.postsArr.filter(post => post.postId! !==postId)
          })
  }

  addPost() {
    const matDialConf = new MatDialogConfig;
    matDialConf.width = "500px";
    this._matDialog.open(PostsFormComponent, matDialConf)
  }

  patchEditObj(post: Ipost) {
    const matDialConf = new MatDialogConfig;
    matDialConf.width = "500px";
    matDialConf.data = post;
    this._matDialog.open(PostsFormComponent, matDialConf)
  }

}
