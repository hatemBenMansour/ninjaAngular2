import {Component, OnInit, Input} from '@angular/core';
import {Album} from "../album.model";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../services/albums.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [AlbumsService],
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: Album;

  constructor(private albumService: AlbumsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
this.route.params
  .map(params => params['albumId'])
  .switchMap(id => this.albumService.getAlbum(id))
  .subscribe(album => this.album = album);
/*
    const albumId = this.route.snapshot.params['albumId'];
    this.albumService.getAlbum(albumId).subscribe(album => this.album = album);
    //this.albumService.getAlbum(albumId).subscribe(album => this.album = album);*/
  }


}
