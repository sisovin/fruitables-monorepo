import { Injectable } from '@nestjs/common';
import { Order } from '@libs/shared-types/src/order.interface';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  createOrder(order: Order): Order {
    const newOrder = {
      ...order,
      id: (this.orders.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  updateOrderStatus(id: string, status: string): Order {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) {
      throw new Error('Order not found');
    }
    const updatedOrder = {
      ...this.orders[index],
      status,
      updatedAt: new Date(),
    };
    this.orders[index] = updatedOrder;
    return updatedOrder;
  }

  getOrderHistory(userId: string): Order[] {
    return this.orders.filter((order) => order.userId === userId);
  }
}
