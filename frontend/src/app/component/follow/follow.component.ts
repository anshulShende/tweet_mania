import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  user: any = {};
  users: any = [];
  isErrorToBeShown: boolean = false;
  error: string = "";

  constructor(private DataSer: DataService, private APISer: ApiService) { }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
    this.fetchPotentialFollowers();
  }

  fetchPotentialFollowers(){
    this.APISer.fetchPotentialFollowers(this.user._id).subscribe(
      (res: any) => {
        console.log("followers", res);
        if(res.result == "Success"){
          res.users.forEach((element: any) => {
            this.users.push(element);
          });
          console.log(this.users);
        }else {
          this.isErrorToBeShown = true;
          this.error = res.message;
          this.hideError();
        }
      }, 
      (err) => {
        if(err.error.result == "Error"){
          this.isErrorToBeShown = true;
          this.error = err.error.message;
        } else{
          this.isErrorToBeShown = true;
          this.error = "Error Occurred.. Please try after some time";
        }
        this.hideError();
      }
    )
    
  }

  followUser(index: number){

  }

  hideError(){
    setTimeout(()=>{
      this.isErrorToBeShown = false;
      this.error = "";
    },3000);
  }

}
