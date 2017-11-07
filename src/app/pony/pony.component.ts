import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Pony} from "./pony";

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  @Input() pony:Pony;
  @Output('ponySelected') emitter = new EventEmitter<Pony>();

  constructor() { }

  ngOnInit() {
  }
  selectPony(){
    this.emitter.emit(this.pony);
    console.log(`pony selectionner est ${this.pony.name}`);
  }

}
