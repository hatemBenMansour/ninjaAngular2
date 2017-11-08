import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from "./user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(fb: FormBuilder) {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
  }

}
