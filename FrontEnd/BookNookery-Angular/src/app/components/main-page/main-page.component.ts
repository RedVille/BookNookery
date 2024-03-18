import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  constructor(public Footer: FooterComponent, public Header: HeaderComponent, private router: Router) {}

  ngOnInit(): void {
      
  }
}
