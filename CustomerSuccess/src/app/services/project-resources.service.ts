import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectResourcesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/project-resources';
  //CRUD operation for BUDGET
  getResource() {
    return this.http.get(this.baseUrl);
  }

  createResource(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteResource(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateResource(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
