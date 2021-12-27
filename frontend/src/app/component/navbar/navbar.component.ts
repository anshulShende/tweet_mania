import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Tweet-Mania';
  
  constructor(private DataSer: DataService) { }

  ngOnInit(): void {}

}
