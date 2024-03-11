import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private http : HttpClient) { }

  baseUrl = 'https://localhost:44347/api/app/project';
  //CRUD operation for BUDGET
  getProject() {
    return this.http.get(this.baseUrl);
  }

  createProject(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteProject(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateProject(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
