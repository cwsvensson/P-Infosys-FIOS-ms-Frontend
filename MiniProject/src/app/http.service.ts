import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8083/subscribe';

  constructor(private http:HttpClient) { }

  getSub(value:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${value.id}`);
  }

  postSub(value:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${value.id}`, value);
  }
}
