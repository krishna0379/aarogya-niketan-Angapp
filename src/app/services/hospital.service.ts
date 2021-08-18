import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class HospitalService {
  constructor(private httpClient: HttpClient) {}

  createHospital(data: any) {
    return this.httpClient
      .post<any>(`http://localhost:3000/hospiatalsInfo`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllHospitals() {
    return this.httpClient
      .get<any>(`http://localhost:3000/hospiatalsInfo`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getHospitalById(id: number) {
    return this.httpClient
      .get<any>(`http://localhost:3000/hospiatalsInfo/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateHospital(data: any, id: number) {
    return this.httpClient
      .put<any>(`http://localhost:3000/hospiatalsInfo/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteHospital(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/hospiatalsInfo/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
