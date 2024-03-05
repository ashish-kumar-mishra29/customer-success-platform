import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/version-history';
  //CRUD operation for BUDGET
  getVersion() {
    return this.http.get(this.baseUrl);
  }

  createVersion(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteVersion(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateVersion(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
