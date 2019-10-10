import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parts } from './parts.interface';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private http: HttpClient) { }

  getParts(): Observable<Parts[]> {
    return this.http.get<Parts[]>('api/globalparts');
  }

  getPart(id): Observable<Parts> {
    return this.http.get<Parts>(`/api/globalparts/${id}`);
  }
}
