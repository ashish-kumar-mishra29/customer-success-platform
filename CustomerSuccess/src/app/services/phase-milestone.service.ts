import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhaseMilestoneService {

  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/phase-milestone';
  
  getPhase() {
    return this.http.get(this.baseUrl);
  }

  createPhase(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deletePhase(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updatePhase(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
