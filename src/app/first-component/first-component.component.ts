import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name="Data from parent component"
  showName=true
  message=""
  constructor(private route:ActivatedRoute,private service:ProfileService) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
    console.log(name)
  }

}
