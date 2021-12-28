import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  users: any;
  currentUser: any;

  constructor(private DataSer: DataService, private APISer: ApiService) { }

  ngOnInit(): void {
    this.fetchPotentialFollowers();
  }

  fetchPotentialFollowers(){
    
  }

  followUser(index: number){

  }

}
