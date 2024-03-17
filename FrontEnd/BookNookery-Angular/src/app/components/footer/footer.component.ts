import { Component, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
  }
}

