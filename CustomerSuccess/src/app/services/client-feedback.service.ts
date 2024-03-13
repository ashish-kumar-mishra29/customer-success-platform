import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientFeedbackService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:44347/api/app/client-feedback';

  getFeedback() {
    return this.http.get(this.baseUrl);
  }

  createFeedback(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteFeedback(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateFeedback(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
