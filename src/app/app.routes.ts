import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AlbumsComponent} from "./albums/albums.component";
import {RacesComponent} from "./races/races.component";
import {PoniesComponent} from "./ponies/ponies.component";
import {AlbumComponent} from "./albums/album/album.component";

export const ROUTES: Routes =[
  {path:'',component:HomeComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'races',component:RacesComponent},
  {path:'ponies',component:PoniesComponent},
  {path:'albums/:albumId',component:AlbumComponent}
];
