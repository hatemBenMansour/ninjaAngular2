import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http: Http, @Inject('base_api_url') private baseApiUrl: string) {
  }

  getAlbums() {
    return this.http.get(`${this.baseApiUrl}/albums`)
      .map(res => res.json());
  }

  getAlbum(id) {
    return this.http.get(`${this.baseApiUrl}/albums/${id}`)
      .map(res => res.json());
  }

}
