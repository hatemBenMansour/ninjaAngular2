import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appDoNothing]',
  inputs: ['logText']
})
export class DoNothingDirective {
    @Input()
    set logText(value) {
    console.log(value);
  }

}
