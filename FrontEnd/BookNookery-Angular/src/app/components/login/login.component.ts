import { Router } from '@angular/router'
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  goToSignup(){
    this.router.navigateByUrl('/signup')
  }

  goToProfile(){
    this.router.navigateByUrl('/profile')
  }

  goToMain(){
    this.router.navigateByUrl('/mainPage')
  }
}
