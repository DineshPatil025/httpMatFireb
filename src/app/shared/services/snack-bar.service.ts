import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar : MatSnackBar) { }

  openSnackBarNot(msg:string,action:string){
    this._snackBar.open(msg,action,{
      duration:3000,
      
    });
  }
}
