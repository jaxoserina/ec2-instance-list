import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_ENDPOINT = 'http://localhost:3001/api/';

  constructor(private httpClient: HttpClient) { }

  public get(path): Observable<any | any[]> {
    return this.httpClient.get(`${this.API_ENDPOINT}${path}`);
  }

}
