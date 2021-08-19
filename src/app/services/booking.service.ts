import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  createBooking(data: any) {
    return this.httpClient
      .post<any>(`http://localhost:3000/booking`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllBookings() {
    return this.httpClient.get<any>(`http://localhost:3000/booking`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getBookingById(id: number) {
    return this.httpClient.get<any>(`http://localhost:3000/booking/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBooking(data: any, id: number) {
    return this.httpClient
      .put<any>(`http://localhost:3000/booking/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBooking(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/booking/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
