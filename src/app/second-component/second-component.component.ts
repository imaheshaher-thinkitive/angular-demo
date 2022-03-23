import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  @Input("name") myName=""
  @Input() showName=true;
  @Output() getName= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    this.showName=!this.showName
  }
  fireEvent(){
    this.getName.emit("Message from child component")
  }
}
