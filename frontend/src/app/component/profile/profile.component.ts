import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  tweets: any = [];
  isFeedtobeLoaded: boolean = false;
  following!: number;
  followers!: number;
  tweetCount!: number;

  constructor(private DataSer: DataService, private APISer: ApiService) { }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    this.fetchUserProfile();

  }

  fetchUserProfile(){
    this.APISer.fetchUserProfile(this.user['_id']).subscribe(
      (res: any) =>{
        if(res.result == "Success"){
          this.user = res.user;
          this.DataSer.set("User", res['user']);
          this.followers = this.user.followers.length;
          this.following = this.user.follows.length;
          this.tweetCount = res.tweets.length;
          if(res.tweets.length == 0){
            this.DataSer.set("isMessageTobeShown", true);
            this.DataSer.set("message",  res.message);
          }else {
            this.DataSer.set("isMessageTobeShown", false);
            this.DataSer.set("message",  "");
            res.tweets.forEach((element: any) => {
              this.tweets.push({
                  name: this.user.name,
                  userName: this.user.username,
                  createdAt: element.createdAt,
                  profileImage: `../../assets/images/${this.user.profileImage}`,
                  message:element.tweetContent,
                  likes: element.likes.length,
                  retweets: element.retweet.length,
              });
            });
            this.DataSer.set("Tweets", this.tweets);
          }
          setTimeout(() => {
            this.isFeedtobeLoaded = true;
          }, 500); 
        }else {
          alert(res.message);
        }
      }, 
      (err) => {
        alert(err.error.message);
      }
    )
  }

}
