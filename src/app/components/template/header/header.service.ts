import { HeaderData } from './../../product/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerdata = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routerUrl:''
  })

  constructor() { }


  get headerData(): HeaderData{
    return this._headerdata.value
  }

  set headerData(headerData: HeaderData) {
    this._headerdata.next(headerData)
  }
}
