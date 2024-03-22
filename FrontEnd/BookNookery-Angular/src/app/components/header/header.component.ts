import { Router } from '@angular/router'
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }

  goToMain(){
    this.router.navigateByUrl('/mainPage')
  }
}
