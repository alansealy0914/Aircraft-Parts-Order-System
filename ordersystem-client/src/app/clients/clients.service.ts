import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from './clients.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>('api/clients');
  }

  getClient(id): Observable<Clients> {
    return this.http.get<Clients>(`/api/clients/${id}`);
  }
}
