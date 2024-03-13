import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectUpdateService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/project-update';
  //CRUD operation for BUDGET
  getUpdate() {
    return this.http.get(this.baseUrl);
  }

  createUpdate(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteUpdate(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateUpdate(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
