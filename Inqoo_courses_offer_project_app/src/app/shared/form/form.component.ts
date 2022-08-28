import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  email = new FormGroup({
userEmail: new FormControl('', [
  Validators?.required,
Validators?.email])});

get getUserEmail(){
  return this.email.get("userEmail");
}
}
