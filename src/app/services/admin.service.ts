import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminService {
  constructor(private httpClient: HttpClient) {}
  createAdmin(data: any) {
    return this.httpClient.post<any>('http://localhost:3000/admin', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllAdmins() {
    return this.httpClient.get<any>('http://localhost:3000/admin').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAdminById(id: number) {
    return this.httpClient.get<any>(`http://localhost:3000/admin/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateAdmin(data: any, id: number) {
    return this.httpClient
      .put<any>(`http://localhost:3000/admin/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteAdmin(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/users/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
