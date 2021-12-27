import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:5000/";

  private LOGIN = this.BASE_URL + "auth/login";
  private POST_NEW_TWEET = this.BASE_URL + "tweet";
  private FETCH_USER_FEED = this.BASE_URL + "feed";

  headers = new HttpHeaders({'Content-Type': 'application/json' });
  options = { headers: this.headers }

  constructor(protected http: HttpClient) { }

  loginUser(username: string, password: string){
    let rqBody = {
      username: username,
      password: password,
    }
    return this.http.post(this.LOGIN, rqBody, this.options);
  }

  postNewTweet(userId: string, tweetContent: any){
    let rqBody = {
      userId: userId,
      tweetContent: tweetContent,
    }
    return this.http.post(this.POST_NEW_TWEET, rqBody, this.options);
  }

  fetchUserFeed(userId: string){
    return this.http.get(`${this.FETCH_USER_FEED}/${userId}`);
  }
}
