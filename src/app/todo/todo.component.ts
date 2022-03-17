import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todoModal } from './todo.modal';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name:String="Mahesh";
  isShowName:boolean=false;
  todo=[{
    id:1,
    title:"First todo"
  }]
   
  constructor() { }

  ngOnInit(): void {

  }

  showName = () =>{
    this.isShowName=!this.isShowName
  }
 @ViewChild("f") formsValue:NgForm |undefined
  addTodo(){
    console.log(this.formsValue?.value)
    this.todo.push(this.formsValue?.value)
  }
}
