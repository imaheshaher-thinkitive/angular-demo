import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserValidator } from '../common/UserValidator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signupForm = new FormGroup({
    username:new FormControl('',[Validators.required,
    UserValidator.canNotContainSpace]
    ,UserValidator.usernameShouldBeUnique),
    password:new FormControl('',Validators.required),
    topics:new FormArray([])
  })
  get username(){ 
    return this.signupForm.get('username')
  }
  addTopic(topic:HTMLInputElement){
    (this.signupform as FormArray).push(new FormControl(topic.value))
    topic.value=""
  }

  getControls() {
    return (this.signupform as FormArray).controls;
  }
  get signupform(){
    return this.signupForm.get('topics') as FormArray
  }
  removeItem(topic:any){
    let index =this.signupform.controls.indexOf(topic)
    this.signupform.removeAt(index)
  }
}
