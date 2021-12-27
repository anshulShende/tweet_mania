import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  @ViewChild("loginForm", { static: false }) loginForm!: NgForm;
  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.DataSer.initializeSingleton();
  }

  login(){
    this.APISer.loginUser(this.username, this.password).subscribe(
      (res: any) => {
        if(res.result == "Success"){
          this.DataSer.set("User", res['User']);
          this.router.navigate(['/home']);
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
