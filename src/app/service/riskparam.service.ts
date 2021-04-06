import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskparamService {

  private baseUrl = 'http://localhost:8080/api/v1/riskparams';

  constructor(private http: HttpClient) { }

  getRiskparam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRiskparam(riskparam: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, riskparam);
  }

  updateRiskparam(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRiskparam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRiskparamList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allriskparams`);
  }
}
