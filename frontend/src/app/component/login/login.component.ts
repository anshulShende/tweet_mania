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
  isErrorToBeShown: boolean = false;
  error: string = "";

  @ViewChild("loginForm", { static: false }) loginForm!: NgForm;
  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.DataSer.initializeSingleton();
  }

  login(){
    if(!this.loginForm.valid){
      alert("Please Enter Correct Details");
      return;
    }
    this.error = "";
    this.APISer.loginUser(this.username, this.password).subscribe(
      (res: any) => {
        if(res.result == "Success"){
          this.router.navigate(['/home']);
          this.DataSer.set("User", res['user']);
          alert(res.message);
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
    );
  }
  

  hideError(){
    setTimeout(()=>{
      this.isErrorToBeShown = false;
      this.error = "";
    },3000);
  }

}
