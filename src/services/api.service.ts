import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ApiService {

  constructor(private http: HttpClient) { }

  get(url): Observable<object> {
    return this.http.get(environment.baseUrl + url);
  }

  post(url, data): Observable<object> {
    return this.http.post(environment.baseUrl + url, data).pipe();
  }

  put(url, data): Observable<object> {
    return this.http.put(environment.baseUrl + url, data);
  }

  delete(url): Observable<object> {
    return this.http.delete(environment.baseUrl + url);
  }

}
