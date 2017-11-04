import {Component, OnInit} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  providers: [JsonPipe],
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
  ponies: Array<any> = [{name: 'ponie 1'}, {name: 'ponie 2'}, {name: 'ponie 3'}];
  poniesJson: string;

  constructor(jsonPipe: JsonPipe) {
    this.poniesJson = jsonPipe.transform(this.ponies);
  }

  ngOnInit() {
  }

  refreshPonies() {
    this.ponies = [{name: 'ponie 1'}, {name: 'ponie 2'}, {name: 'ponie 3'},{name: 'ponie 4'}, {name: 'ponie 5'}];
  }

}
