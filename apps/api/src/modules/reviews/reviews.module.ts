import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { PrismaModule } from '@nestjs/prisma';

@Module({
  imports: [PrismaModule],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule {}
