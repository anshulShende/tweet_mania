import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHomeComponent!: boolean;
  title = 'Tweet-Mania';
  
  constructor(private DataSer: DataService) { }

  ngOnInit(): void {
    if(this.DataSer.get("isHomeComponent") == undefined || this.DataSer.get("isHomeComponent") == null){
      this.isHomeComponent = false;
    }else{
      this.isHomeComponent = this.DataSer.get("isHomeComponent");
    }
    console.log(this.isHomeComponent);
  }

}
