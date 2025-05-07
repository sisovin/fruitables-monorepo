import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { PrismaModule } from '@nestjs/prisma';

@Module({
  imports: [PrismaModule],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
