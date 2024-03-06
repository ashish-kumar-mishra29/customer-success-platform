import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {

  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/stake-holder';
  
  getScope() {
    return this.http.get(this.baseUrl);
  }

  createScope(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteScope(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateScope(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
