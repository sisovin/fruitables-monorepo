import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItemsSubject.next(JSON.parse(storedCartItems));
    }
  }

  addItem(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
    this.syncWithLocalStorage(updatedItems);
  }

  removeItem(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(cartItem => cartItem.id !== item.id);
    this.cartItemsSubject.next(updatedItems);
    this.syncWithLocalStorage(updatedItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
    localStorage.removeItem('cartItems');
  }

  private syncWithLocalStorage(items: any[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }
}
