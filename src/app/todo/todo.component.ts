import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { todoModal } from './todo.modal';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:any;
  constructor(private service:TodoService){
    service.getTodo().subscribe(response=>{
      this.todo=response
    })
  }
  name:String="Mahesh";
  isShowName:boolean=false;
 
  ngOnInit(): void {

  }

  showName = () =>{
    this.isShowName=!this.isShowName
  }
 @ViewChild("f") formsValue:NgForm |undefined
  addTodo(){
    console.log(this.formsValue?.value)
   
    // this.todo.push(this.formsValue?.value)
    const post = this.formsValue?.value
    this.todo.unshift(post)
    this.service.addTodo(post).subscribe(response=>console.log("response",response))
  }
}
