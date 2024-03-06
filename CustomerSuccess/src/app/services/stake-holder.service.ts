import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StakeHolderService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44347/api/app/stake-holder';
  //CRUD operation for BUDGET
  getStakeHolder() {
    return this.http.get(this.baseUrl);
  }

  createStakeHolder(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteStakeHolder(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  updateStakeHolder(id: string, data: any) {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }
}
