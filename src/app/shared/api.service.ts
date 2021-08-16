import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postHospital(data: any) {
    return this.http
      .post<any>('http://localhost:3000/HospiatalsInfo', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getHospital() {
    return this.http.get<any>('http://localhost:3000/HospiatalsInfo').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateHospital(data: any, id: number) {
    return this.http
      .put<any>('http://localhost:3000/HospiatalsInfo' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteHospital(id: number) {
    return this.http
      .delete<any>('http://localhost:3000/HospiatalsInfo' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  
}
