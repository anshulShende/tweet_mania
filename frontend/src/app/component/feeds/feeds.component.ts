import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isMessageTobeShown: boolean = false;
  message: string = "";

  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) {
    this.tweets = [];
  }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    if(this.router.url =="/home/feed"){
      this.fetchUserFeed();
    } else if(this.router.url =="/home/profile"){
      this.loadUserProfile();
    }
    
  }

  @HostListener("document: newUserfollowed")
  fetchUserFeed(){
    this.tweets = [];
    this.APISer.fetchUserFeed(this.user['_id']).subscribe(
      (res: any) =>{
        if(res.result == "Success"){
          if(res.tweets.length == 0){
            this.isMessageTobeShown = true;
            this.message = res.message;
            return;
          }
          this.isMessageTobeShown = false;
          this.message = "";
          res.tweets.forEach((element: any) => {
            this.tweets.push({
                name: element.userId.name,
                userName: element.userId.username,
                createdAt: element.createdAt,
                profileImage: `../../assets/images/${element.userId.profileImage}`,
                message:element.tweetContent,
                likes: element.likes.length,
                retweets: element.retweet.length,
            });
          });
          
        }else {
          alert(res.message);
        }
      }, 
      (err) => {
        alert(err.error.message);
      }
    )
  }

  loadUserProfile(){
    this.DataSer.get("isMessageTobeShown");
    this.DataSer.get("message");
    this.user = this.DataSer.get("User");
    this.tweets = this.DataSer.get("Tweets");
  }
}
