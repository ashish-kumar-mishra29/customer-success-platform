import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/risk-profile';
  //CRUD operation for BUDGET
  getRisk() {
    return this.http.get(this.baseUrl);
  }

  createRisk(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteRisk(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateRisk(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
