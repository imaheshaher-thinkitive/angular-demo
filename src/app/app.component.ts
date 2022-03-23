import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
  isLoggedIn: boolean;
  title = 'demo';
  isCollapsed = true;
  constructor(private authService: AuthService, private router: Router,public http:HttpClient) {
    this.isLoggedIn = this.authService.isLoggedIn();;
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/todo']);
    }
  }
}
