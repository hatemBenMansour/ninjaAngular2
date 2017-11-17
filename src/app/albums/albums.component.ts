import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "./services/albums.service";
import {Album} from "./album.model";
import {FormControl, FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  providers: [AlbumsService],
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {

  albums: Array<Album>;
  searchForm: FormGroup;
  searchAlbum: FormControl;

  constructor(private albumsService: AlbumsService, fb: FormBuilder) {
    this.searchAlbum = fb.control('');
    this.searchForm = fb.group({
      searchAlbum: this.searchAlbum
    });

  }

  ngOnInit() {
    this.searchAlbum
      .valueChanges
      .filter(query => query.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(value =>this.albumsService.search(value).catch(error => Observable.of([])))
      .subscribe(results => this.albums = results);

    this.albumsService
      .getAlbums()
      .subscribe(
      albums => this.albums = albums
    );
  }


}
