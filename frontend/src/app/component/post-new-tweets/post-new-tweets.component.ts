import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';
declare const $: any;

@Component({
  selector: 'app-post-new-tweets',
  templateUrl: './post-new-tweets.component.html',
  styleUrls: ['./post-new-tweets.component.css']
})
export class PostNewTweetsComponent implements OnInit {
  user: any = {};
  showtweetDiv: boolean = true;
  
  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    console.log(this.DataSer.get("User"));
  }

  postNewTweet(){
    var tweetContent = $('#tweetContent').text();
    console.log(tweetContent)
    if( tweetContent.length < 256 && tweetContent.length > 0){
      this.APISer.postNewTweet(this.user['_id'], tweetContent).subscribe(
        (res: any) => {
          if(res.result == "Success"){
            alert(res.message);
            this.showtweetDiv = false;
            setTimeout(() => {
              this.showtweetDiv = true;
            }, 10);
          }else {
            alert(res.message);
          }
        }, (err) => {
          if(err.error.result == "Error"){
            alert(err.error.message);
          } else{
            alert("Error Occurred.. Please try after some time");
          }
        }
      )
    }
  }

}
