import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nestjs/prisma';
import { Order } from '@libs/shared-types/src/order.interface';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(order: Order): Promise<Order> {
    const newOrder = await this.prisma.order.create({
      data: {
        ...order,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newOrder;
  }

  async updateOrderStatus(id: string, status: string): Promise<Order> {
    const updatedOrder = await this.prisma.order.update({
      where: { id },
      data: {
        status,
        updatedAt: new Date(),
      },
    });
    return updatedOrder;
  }

  async getOrderHistory(userId: string): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
    });
  }

  async submitOrder(order: Order): Promise<Order> {
    const newOrder = await this.prisma.order.create({
      data: {
        ...order,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newOrder;
  }

  async fetchOrderHistory(userId: string): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
