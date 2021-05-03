import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerServiceService {
  private baseUrl = 'http://localhost:8087/customer';
  private currentLoggedOnUser : any;

  constructor(private http:HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, customer);
  }

  getCurrentUser()
  {
    return this.currentLoggedOnUser;
  }
  setCurrentUser(user : any)
  {
    this.currentLoggedOnUser = user;
  }

}
