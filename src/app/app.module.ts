import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RacesComponent} from './races/races.component';
import {PoniesComponent} from './ponies/ponies.component';
import {PonyComponent} from './pony/pony.component';
import {ApiService} from "./api/api.service";
import {RacesService} from "./races/races.service";
import {FakeApiService} from "./api/fake-api.service";
import {FromNowPipe} from './pipes/from-now.pipe';
import {DoNothingDirective} from './directives/do-nothing.directive';
import {RegisterComponent} from './register/register.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';

const IS_PROD = false;
const baseUrl = 'https://jsonplaceholder.typicode.com';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    PoniesComponent,
    PonyComponent,
    FromNowPipe,
    DoNothingDirective,
    RegisterComponent,
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [RacesService,
    {provide: ApiService, useClass: IS_PROD ? ApiService : FakeApiService},
    {provide:'base_api_url',useValue:'https://jsonplaceholder.typicode.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
