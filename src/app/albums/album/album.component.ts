import {Component, OnInit, Input} from '@angular/core';
import {Album} from "../album.model";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  selectedAlbum:Album;

  constructor() {
  }

  ngOnInit() {
  }
  detailsAlbum(album:Album){
    this.selectedAlbum = album;
    console.log(this.selectedAlbum);

  }

}
