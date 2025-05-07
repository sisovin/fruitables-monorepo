import { Injectable } from '@nestjs/common';
import { Review } from '@libs/shared-types/src/review.interface';

@Injectable()
export class ReviewsService {
  private reviews: Review[] = [];

  createReview(review: Review): Review {
    const newReview = {
      ...review,
      id: (this.reviews.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.reviews.push(newReview);
    return newReview;
  }

  calculateRating(productId: string): number {
    const productReviews = this.reviews.filter(
      (review) => review.productId === productId,
    );
    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    return productReviews.length ? totalRating / productReviews.length : 0;
  }
}
