import { Injectable } from '@angular/core';

@Injectable()
export class FakeApiService {

  constructor() { }
  getList(path){
    return [{name:'Tunis'},{name:'Madrid'},{name:'Paris'},{name:'Munich'},{name:'Rome'},{name:'Manchster'}];
  }

}
