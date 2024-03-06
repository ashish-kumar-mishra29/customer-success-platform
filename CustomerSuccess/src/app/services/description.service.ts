import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DescriptionService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/audit-history';
  //CRUD operation for BUDGET
  getDescription() {
    return this.http.get(this.baseUrl);
  }

  createDescription(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteDescription(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateDescription(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
