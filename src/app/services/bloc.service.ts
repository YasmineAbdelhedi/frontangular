import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from 'src/app/bloc/models/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://localhost:3000/blocs'; // URL JSON Server

  constructor(private http: HttpClient) {}

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}`);
  }

  addBloc(blocData: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.apiUrl}`, blocData);
  }

  updateBloc(idBloc: number, updatedData: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/${idBloc}`, updatedData);
  }

  deleteBloc(idBloc: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idBloc}`);
  }
}
