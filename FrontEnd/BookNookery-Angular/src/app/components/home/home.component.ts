import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

    constructor(public Footer: FooterComponent, public Header: HeaderComponent) {}


    ngOnInit(): void {
        
    }
}
