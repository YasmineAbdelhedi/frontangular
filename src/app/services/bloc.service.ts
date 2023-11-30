import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlocService {
    private apiUrl = 'http://localhost:8089/blocs'; // URL backend Spring

    constructor(private http: HttpClient) {}

    getAllBlocs(): Observable<any> {
        return this.http.get(`${this.apiUrl}/retrieveall`);
    }

    addBloc(blocData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/addbloc`, blocData);
    }

    updateBloc(idBloc: number, updatedData: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/updatebloc/${idBloc}`, updatedData);
    }

    deleteBloc(idBloc: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/deletebloc/${idBloc}`);
    }


}

export class BlocserviceService {
}
