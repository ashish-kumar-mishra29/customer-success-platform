import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MomService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/meeting-minute';

  getMOM() {
    return this.http.get(this.baseUrl);
  }

  createMOM(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteMOM(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateMOM(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
