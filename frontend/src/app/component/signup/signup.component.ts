import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = "";
  username: string = "";
  email: string = "";
  bio: string = "";
  password: string = "";
  cpassword: string = "";
  isErrorToBeShown: boolean = false;
  error: string = "";

  @ViewChild("signupForm", { static: false }) signupForm!: NgForm;
  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) { }

  ngOnInit(): void {}

  validate(){
    if(!this.name || this.name == "" || this.name.length > 32 || !this.username || this.username == "" || this.username.length > 32 || 
    !this.email || this.email == "" || !this.password || this.password == "" || !this.cpassword || this.cpassword == "") {
      this.isErrorToBeShown = true;
      this.error = "Incorrect Details";
      this.hideError();
    }
    return true;
  }
  async signup(){
    if(!this.validate()){
      return;
    }
    if(this.cpassword != this.password){
      this.isErrorToBeShown = true;
      this.error = "Password and Confirm Password does not match";
      this.hideError();
    }
    let rqBody = {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
        bio: (this.bio) ? this.bio : "",
    }
    this.APISer.signupUser(rqBody).subscribe(
      (res: any) => {
        if(res.result == "Success"){
          this.router.navigate(['/login']);
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
