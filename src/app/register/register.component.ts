import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "./user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  birthdayCtrl:FormControl;
  userForm: FormGroup;

  static isOldEnough(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : {tooYoung: true};
  }

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(5)]);
    this.birthdayCtrl = fb.control('', [Validators.required, RegisterComponent.isOldEnough]);

    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      birthday: this.birthdayCtrl
    });

  }

  ngOnInit() {
  }

  register() {
    console.log(this.userForm.value);
  }

  reset() {
    this.usernameCtrl.setValue('reset');
    this.passwordCtrl.setValue('reset');
  }



}
