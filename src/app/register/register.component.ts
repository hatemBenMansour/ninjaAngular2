import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "./user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordForm: FormGroup;
  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmCtrl: FormControl;
  birthdayCtrl: FormControl;
  passwordStrength: number = 0;

  static passwordMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirm').value;
    // console.log(password);
    // console.log(confirmPassword===password);
    let retrunedValue = password === confirmPassword ? null : {matchingError: true};
    console.log(retrunedValue);
    return retrunedValue;
  }


  static isOldEnough(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : {tooYoung: true};
  }

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(5)]);
    this.confirmCtrl = fb.control('', Validators.required);

    this.birthdayCtrl = fb.control('', [Validators.required, RegisterComponent.isOldEnough]);

    this.passwordForm = fb.group({
      password: this.passwordCtrl,
      confirm: this.confirmCtrl
    }, {validator: RegisterComponent.passwordMatch});

    this.userForm = fb.group({
      username: this.usernameCtrl,
      //password: this.passwordCtrl,
      birthday: this.birthdayCtrl,
      passwordForm: this.passwordForm
    });

    this.passwordCtrl.valueChanges.debounceTime(400).distinctUntilChanged().subscribe(newValue => this.passwordStrength = newValue.length)
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
