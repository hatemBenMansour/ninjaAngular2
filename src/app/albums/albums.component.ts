import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "./services/albums.service";
import {Album} from "./album.model";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  providers: [AlbumsService],
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {

  albums: Array<Album>;

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(
      albums => this.albums = albums
    );
  }

  getAlbum(id) {
    console.log(id);
  }

}
