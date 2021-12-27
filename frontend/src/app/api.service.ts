import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:5000/";

  private LOGIN = this.BASE_URL + "auth/login";

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
}
