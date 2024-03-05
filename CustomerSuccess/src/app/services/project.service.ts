import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/';
  //CRUD operation for BUDGET
  getBudget() {
    return this.http.get(this.baseUrl + 'app/project-budget');
  }

  createBudget(data:any) {
    return this.http.post(this.baseUrl + 'app/project-budget', data
    );
  }

  deleteBudget(id: string) {
    return this.http.delete(this.baseUrl + `app/project-budget/${id}`);
  }

  updateBudget(id: string, data: any) {
    return this.http.put(this.baseUrl + `app/project-budget/${id}`, data);
  }
}
