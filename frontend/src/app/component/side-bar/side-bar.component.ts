import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadPage(page: string){
    if(page == 'home'){
      this.router.navigate(["/home"]);
    } else if(page == 'profile'){
      this.router.navigate(['home/profile']);
    }
    
  }

  logout(){
    this.router.navigate(["/login"]);
  }

}
