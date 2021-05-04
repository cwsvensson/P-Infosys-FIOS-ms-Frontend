import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FiosServiceService {
  private baseUrl = 'http://localhost:8083/subscribe';

  constructor(private http:HttpClient) { }

  postCableSubscription(subscription): Observable<any> {
    return this.http.post(`${this.baseUrl}/cable`, subscription);
  }

  postInternetSubscription(subscription): Observable<any> {
    return this.http.post(`${this.baseUrl}/internet`, subscription);
  }

  postPhoneSubscription(subscription): Observable<any> {
    return this.http.post(`${this.baseUrl}/phone`, subscription);
  }

  deleteCableSubscription(subscription): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cable`, subscription);
  }

  deleteInternetSubscription(subscription): Observable<any> {
    return this.http.delete(`${this.baseUrl}/internet`, subscription);
  }

  deletePhoneSubscription(subscription): Observable<any> {
    return this.http.delete(`${this.baseUrl}/phone`, subscription);
  }

  getSubscriptions(username): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/usernames/${username}`);
  }
}
