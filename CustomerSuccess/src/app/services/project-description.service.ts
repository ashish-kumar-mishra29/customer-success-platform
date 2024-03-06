import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionService {

  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      ContentType: 'application/json; charset=utf-8',
    });
  }
  baseUrl = 'https://localhost:44347/api/app/project-description';

  getDescription() {
    return this.http.get(this.baseUrl);
  }

  createDescription(data: any) {
    console.log(data)
    return this.http.post(this.baseUrl, data);
  }

  deleteDescription(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateDescription(id: string, data: any) {
    console.log(data)
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
