import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  tweets: any = [];
  user: any = {};

  constructor(private DataSer: DataService, private APISer: ApiService) {
    this.tweets = [
      {
        name: 'Bill Gates',
        userName: 'BillGates',
        postAge: 2,
        profileImage: './assets/images/billgates.jpg',
        message:
          "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
      }
    ];
  }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    this.fetchUserFeed();
  }

  fetchUserFeed(){
    
  }

}
