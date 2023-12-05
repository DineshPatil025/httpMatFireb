import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

private loaderState$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
loaderStateAsObs$ = this.loaderState$.asObservable();

  constructor() { }

sendLoaderState(val:boolean){
  this.loaderState$.next(val)
}

}
