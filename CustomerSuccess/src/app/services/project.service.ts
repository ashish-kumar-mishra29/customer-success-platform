import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/';
  //CRUD BUDGET
  getBudget() {
    return this.http.get(this.baseUrl + 'app/project-budget');
  }

  createBudget() {
    return this.http.post(this.baseUrl + 'app/project-budget', null, {
      responseType: 'text',
    });
  }
}
