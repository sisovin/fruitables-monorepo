import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  submitOrder(order: any): Observable<any> {
    return this.http.post('/api/orders', order);
  }

  fetchOrderHistory(userId: string): Observable<any> {
    return this.http.get(`/api/orders/history/${userId}`);
  }
}
