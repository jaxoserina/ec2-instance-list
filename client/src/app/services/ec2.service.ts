import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { APIData } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EC2Service {

  constructor(private apiService: ApiService) {
  }

  public getInstances(path: string): Observable<any[]> {
    return this.apiService.get(`${path}`).pipe(
      map((response: APIData) => response.data)
    );
  }
}
