import { Cart } from './cart.interface';

export interface Order {
  id: string;
  userId: string;
  cart: Cart;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
