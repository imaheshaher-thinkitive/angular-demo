import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { todoModal } from './todo.modal';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(service:TodoService){
    // let service = new TodoService();
    this.todo=service.getTodos();
  }
  name:String="Mahesh";
  isShowName:boolean=false;
  todo=[{
    id:1,
    title:"First todo"
  }]
   
 

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
