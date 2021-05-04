import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url = "http://localhost:8088/admin";
  private loggedInUser: any;

  constructor(private http: HttpClient) { }

  login(adminCreds): Observable<any>{
    return this.http.post(`${this.url}/adminLogin`, adminCreds);

  }

  register(admin): Observable<any>{
    return this.http.post(`${this.url}/`, admin);
  }

  getCurrentAdmin(){
    return this.loggedInUser;
  }

  setCurrentAdmin(user: any){
    this.loggedInUser = user;
  }

}
