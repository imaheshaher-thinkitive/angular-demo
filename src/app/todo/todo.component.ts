import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name:String="Mahesh";
  isShowName:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }

  showName = () =>{
    this.isShowName=!this.isShowName
  }

}
