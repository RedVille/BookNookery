import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

    constructor(public Footer: FooterComponent, public Header: HeaderComponent, private router: Router) {}


    ngOnInit(): void {
        
    }

    goToMain(){
      this.router.navigateByUrl('/mainPage')
    }
}
