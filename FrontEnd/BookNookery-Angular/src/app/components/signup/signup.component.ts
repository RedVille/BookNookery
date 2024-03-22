import { Router } from '@angular/router'
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }

  goToProfile(){
    this.router.navigateByUrl('/profile')
  }

  goToMain(){
    this.router.navigateByUrl('/mainPage')
  }
}
