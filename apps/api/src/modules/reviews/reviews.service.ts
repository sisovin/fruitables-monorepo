import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nestjs/prisma';
import { Review } from '@libs/shared-types/src/review.interface';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(review: Review): Promise<Review> {
    const newReview = await this.prisma.review.create({
      data: {
        ...review,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newReview;
  }

  async calculateRating(productId: string): Promise<number> {
    const productReviews = await this.prisma.review.findMany({
      where: { productId },
    });
    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    return productReviews.length ? totalRating / productReviews.length : 0;
  }
}
