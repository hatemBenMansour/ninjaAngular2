import {Component, OnInit} from '@angular/core';
import {RacesService} from "./races.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Array<any> = [];

  constructor(private racesService: RacesService) {
    this.races = this.racesService.list();
  }

  ngOnInit() {
  }

}
