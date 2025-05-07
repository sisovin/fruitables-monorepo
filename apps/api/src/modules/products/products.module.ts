import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductQueryDto } from './dto/product-query.dto';
import { PrismaModule } from '@nestjs/prisma';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductQueryDto],
  imports: [PrismaModule],
})
export class ProductsModule {}
