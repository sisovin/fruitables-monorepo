import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nestjs/prisma';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(name: string, parentId?: string) {
    const newCategory = await this.prisma.category.create({
      data: {
        name,
        parentId: parentId || null,
      },
    });
    return newCategory;
  }

  async getCategoryTree() {
    const buildTree = async (parentId: string | null) => {
      const categories = await this.prisma.category.findMany({
        where: { parentId },
      });
      return Promise.all(
        categories.map(async (category) => ({
          ...category,
          children: await buildTree(category.id),
        })),
      );
    };
    return buildTree(null);
  }

  async getProductCounts() {
    const categories = await this.prisma.category.findMany();
    return Promise.all(
      categories.map(async (category) => {
        const productCount = await this.prisma.product.count({
          where: { categoryId: category.id },
        });
        return {
          ...category,
          productCount,
        };
      }),
    );
  }
}
