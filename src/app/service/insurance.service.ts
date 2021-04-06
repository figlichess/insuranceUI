import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private baseUrl = 'http://localhost:8080/api/v1/insurance';

  constructor(private http: HttpClient) { }

  calculateInsurance(params: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/calculatecasco`, params);
  }
}
