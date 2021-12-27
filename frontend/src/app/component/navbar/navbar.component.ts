import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  istoBeRendered: boolean = true;
  title = 'Tweet-Mania';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url !="/login" && this.router.url !="/signup"){
      this.istoBeRendered = false;
    }
  }

}
