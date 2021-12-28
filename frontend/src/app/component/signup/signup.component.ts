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

  imageArray: string[] = ["Aryan.png", "Hetvi.png", "Kashyap.png", "Poojan.png", "Rushi.png", "Saheel.png", "Yash.png"];

  @ViewChild("signupForm", { static: false }) signupForm!: NgForm;
  constructor(private DataSer: DataService, private APISer: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.DataSer.initializeSingleton();
  }

  validate(){
    if(!this.name || this.name == "" || this.name.length > 32 || !this.username || this.username == "" || this.username.length > 32 || 
    !this.email || this.email == "" || !this.password || this.password == "" || !this.cpassword || this.cpassword == "") {
      this.isErrorToBeShown = true;
      this.error = "Incorrect Details";
      this.hideError();
    }
    return true;
  }

  fetchImageName(){
    let min = 1
    let max = 8
    let random = Math.floor(Math.random() * (max - min) + min); 
    return this.imageArray[random];
  }

  async signup(){
    if(!this.signupForm.valid){
      alert("Empty or Incorrect Details");
      return;
    }
    if(!this.validate()){
      return;
    }
    if(this.cpassword != this.password){
      this.isErrorToBeShown = true;
      this.error = "Password and Confirm Password does not match";
      this.hideError();
      return;
    }
    let rqBody = {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
        bio: (this.bio) ? this.bio : "",
        profileImage: await this.fetchImageName(),
    }
    this.APISer.signupUser(rqBody).subscribe(
      (res: any) => {
        if(res.result == "Success"){
          this.DataSer.set("User", res['user']);
          setTimeout(() => {
            this.router.navigate(['/home']);
          },500);
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
