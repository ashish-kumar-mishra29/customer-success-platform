import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectStackService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/project-stack';

  getStack() {
    return this.http.get(this.baseUrl);
  }

  createStack(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteStack(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateStack(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
