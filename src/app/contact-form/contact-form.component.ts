import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  components = [
    {id:1,name:'email'},
    {id:2,name:'phone'}

  ]
  onClick(event:any){
    console.log(event)
  }
  submit(f:any){
    console.log(f.value)
  }
}
