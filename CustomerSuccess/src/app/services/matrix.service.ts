import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrixService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/audit-history';
  //CRUD operation for BUDGET
  getMatrix() {
    return this.http.get(this.baseUrl);
  }

  createMatrix(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteMatrix(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateMatrix(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
