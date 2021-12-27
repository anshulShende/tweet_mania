import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private DataSer: DataService) { }

  ngOnInit(): void {
    this.DataSer.set("isHomeComponent", true);
  }

}
