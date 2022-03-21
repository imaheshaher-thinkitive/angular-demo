import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  posts:any;
  
  constructor(private services:PostService) {
  this.services.getPosts()
    .subscribe(response => {
     this.posts=response
    },err=>console.log(err))
   }

  createPost(input:HTMLInputElement){
    const post:any={title:input.value}
    // this.http.post(this.url,JSON.stringify(post)).subscribe(response => {
    //   console.log(response)
    //   post['id']=101
    //   this.posts = [...this.posts,post]

    // })
  }
  ngOnInit(): void {
  }

}
