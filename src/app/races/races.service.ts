import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";

@Injectable()
export class RacesService {

  constructor(private apiService: ApiService) {
  }

  list() {
    return this.apiService.getList('/races');
  }

}
