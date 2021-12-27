import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { PostNewTweetsComponent } from './component/post-new-tweets/post-new-tweets.component';
import { FeedsComponent } from './component/feeds/feeds.component';
import { HomeChildComponent } from './component/home-child/home-child.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    SideBarComponent,
    PostNewTweetsComponent,
    FeedsComponent,
    HomeChildComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
