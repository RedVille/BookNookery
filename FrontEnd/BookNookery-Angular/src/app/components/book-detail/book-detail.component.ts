import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  
  constructor(public Footer: FooterComponent, public Header: HeaderComponent, private router: Router) {}


  ngOnInit(): void {
      
  }

  
}
