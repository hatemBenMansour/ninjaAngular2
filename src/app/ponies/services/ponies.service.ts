import { Injectable } from '@angular/core';

@Injectable()
export class PoniesService {

  constructor() { }

  getList(){
    return [{id:1,name: 'ponie 1'}, {id:2,name: 'ponie 2'}, {id:3,name: 'ponie 3'}, {id:4,name: 'ponie 4'}, {id:5,name: 'ponie 5'}];
  }

}
