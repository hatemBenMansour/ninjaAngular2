import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RacesComponent} from './races/races.component';
import {PoniesComponent} from './ponies/ponies.component';
import {PonyComponent} from './pony/pony.component';
import {ApiService} from "./api/api.service";
import {RacesService} from "./races/races.service";
import {FakeApiService} from "./api/fake-api.service";
import { FromNowPipe } from './pipes/from-now.pipe';
import { DoNothingDirective } from './directives/do-nothing.directive';

const IS_PROD = false;

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    PoniesComponent,
    PonyComponent,
    FromNowPipe,
    DoNothingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [RacesService,
    {provide: ApiService, useClass: IS_PROD ? ApiService : FakeApiService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
