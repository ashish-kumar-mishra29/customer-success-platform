import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApprovedTeamService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/approved-team';

  getTeam() {
    return this.http.get(this.baseUrl);
  }

  createTeam(data: any) {
    console.log(data);
    return this.http.post(this.baseUrl, data);
  }

  deleteTeam(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateTeam(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
