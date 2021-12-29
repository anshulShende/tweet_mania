import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: any = {};
  constructor(private router: Router, private APISer: ApiService, private DataSer: DataService) { }

  ngOnInit(): void {
    this.user = this.DataSer.get("User");
  }

  loadPage(page: string){
    if(page == 'home'){
      this.router.navigate(["/home/feed"]);
    } else if(page == 'profile'){
      this.router.navigate(['home/profile']);
    } else if(page == 'explore'){
      this.router.navigate(['home/explore']);
    }
    
  }

  @HostListener("document: logout")
  logout(){
    let text = "Are you sure you want to Logout?";
    if(confirm(text)==true){
      this.APISer.logout(this.user['_id']).subscribe(
        (res: any) => {
          if(res.result == "Success"){
            this.router.navigate(["/login"]);
          }
        }, (err) => {
          alert(err.error.message);
          this.router.navigate(["/login"]);
        }
      );
      
    }else{
      return;
    }
    
  }

}
