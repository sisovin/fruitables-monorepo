import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductQueryDto } from './dto/product-query.dto';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductQueryDto],
})
export class ProductsModule {}
