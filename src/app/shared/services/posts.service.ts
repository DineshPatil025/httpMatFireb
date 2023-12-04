import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost, } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // postUrl: string = `${environment.baseUrl}/posts.json `;
  postUrl:string = `${environment.baseUrl}/posts.json`;



  private _http = inject(HttpClient);
  postArr!: Array<Ipost>

  private sendPost$ = new Subject;
  sendPostAsObs$ = this.sendPost$.asObservable();

  private sendUpdPost$ = new Subject;
  sendUpdPostAsObs$ = this.sendUpdPost$.asObservable();

  private sendDelePost$ = new Subject;
  sendUpdDeltAsObs$ = this.sendDelePost$.asObservable();


  constructor() { }

  getAllPosts(): Observable<Array<Ipost>> {
    return this._http.get<Ipost>(this.postUrl)
      .pipe(
        map((res: any) => {
          this.postArr = []
          for (const key in res) {
            this.postArr.unshift({ ...res[key], postId: key })
          }
          return this.postArr;
        }))

  }

  sendPostObject(newPost: Ipost) {

    this._http.post(this.postUrl, newPost)
      .subscribe((res: any) => {
        this.sendPost$.next({ ...newPost, postId: res['name'] })
      })


  }
  senUpdateObject(updtObj: Ipost, postId: string) {

    let updateUrl = `${environment.baseUrl}/posts/${postId}.json`;
    this._http.patch<Ipost>(updateUrl, updtObj)
      .subscribe((res: any) => {
        this.sendUpdPost$.next({ ...res, postId: postId })
      })

  }


  onPostDelete(postId: string) {
    let deletUrl: string = `${environment.baseUrl}/posts/${postId}.json `
    console.log(deletUrl);


    this._http.delete(deletUrl).subscribe(res => {
      console.log(res);
      this.sendDelePost$.next(postId)
    })






    // this.sendDelePost$()

  }
}
