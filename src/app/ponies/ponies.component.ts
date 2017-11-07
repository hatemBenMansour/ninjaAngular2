import {Component, OnInit, EventEmitter} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Pony} from "../pony/pony";

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  providers: [JsonPipe],
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
  ponies: Array<Pony> = [{id:1,name: 'ponie 1'}, {id:2,name: 'ponie 2'}, {id:3,name: 'ponie 3'}, {id:4,name: 'ponie 4'}, {id:5,name: 'ponie 5'}];
  poniesJson: string;
  data:Number =12345;

  constructor(jsonPipe: JsonPipe) {
    this.poniesJson = jsonPipe.transform(this.ponies);
  }

  ngOnInit() {
    Observable.from([1, 2, 3, 4, 5]).map(x => x * 2).filter(x => x > 5).subscribe(x=>console.log(x));
    Observable.range(0, 5)
      .map(x => {
        if (x % 2 === 1) {
          throw new Error('something went wrong');
        } else {
          return x;
        }
      })
      .filter(x => x > 5)
      .subscribe(x => console.log(x), error => console.log(error));

    const emitter = new EventEmitter();
    const subscription = emitter.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('done')
    );
    emitter.emit('hello');
    subscription.unsubscribe(); // unsubscribe
    emitter.emit('there');
  }

  refreshPonies() {
    this.ponies = [{id:1,name: 'ponie 1'}, {id:1,name: 'ponie 2'}, {id:1,name: 'ponie 3'}, {id:1,name: 'ponie 4'}, {id:1,name: 'ponie 5'}];
  }

  betOnPony(pony){
    console.log(`le poney récuperer depuis la parent ${pony}`);
  }

}
