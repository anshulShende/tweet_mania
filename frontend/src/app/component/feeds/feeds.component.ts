import { ElementSchemaRegistry } from '@angular/compiler';
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
    this.tweets = [];
  }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    this.fetchUserFeed();
  }

  fetchUserFeed(){
    this.APISer.fetchUserFeed(this.user['_id']).subscribe(
      (res: any) =>{
        if(res.result == "Success"){
          if(res.tweets.length == 0){
            console.log("Follow Users to get Feed");
            return;
          }
          res.tweets.forEach((element: any) => {
            this.tweets.push({
                name: "Nitin Walke",
                userName: element.userId,
                createdAt: element.createdAt,
                profileImage: '../../assets/images/Aryan.png',
                message:element.tweetContent,
                likes: element.likes.length,
                retweets: element.retweet.length,
            });
          });
          
        }else {
          console.log(res);
        }
      }, 
      (err) => {
        console.log(err);
      }
    )
  }

}
