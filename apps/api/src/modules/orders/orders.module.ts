import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PrismaModule } from '@nestjs/prisma';

@Module({
  imports: [PrismaModule],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
