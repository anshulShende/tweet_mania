import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any;

  initializeSingleton(){
    this.data = {};
  }

  get(propname: any){
    return this.data[propname];
  }

  set(propname: any, propValue: any){
    this.data[propname] = propValue;
  }
}
