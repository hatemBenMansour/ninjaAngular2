import {Directive, OnInit, Input} from '@angular/core';
import {PoniesService} from "../ponies/services/ponies.service";

@Directive({
  selector: '[appDoNothing]',
  inputs: ['logText'],
  providers: [PoniesService]
})
export class DoNothingDirective implements OnInit {
  @Input() logText: string;

  constructor(poniesService:PoniesService) {
  const ponies = poniesService.getList();
  console.log(`ponies sont : ${ponies}`);
  }

  ngOnInit() {
    console.log(`toto : ${this.logText}`);
  }

}
