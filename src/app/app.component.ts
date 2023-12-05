import { Component, OnInit, inject } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'httpMatFireb';
isLoading !:boolean ;


private _loaderService = inject(LoaderService)

constructor(){}

ngOnInit(): void {
  this._loaderService.loaderStateAsObs$.subscribe(
    res => this.isLoading = res
  )
}


}
