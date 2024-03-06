import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/sprint';
  //CRUD operation for BUDGET
  getSprint() {
    return this.http.get(this.baseUrl);
  }

  createSprint(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteSprint(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateSprint(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
