import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nestjs/prisma';
import { ProductQueryDto } from './dto/product-query.dto';
import { Product } from '@libs/shared-types/src/product.interface';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(query: ProductQueryDto, page: number = 1, limit: number = 10): Promise<Product[]> {
    let filteredProducts = await this.prisma.product.findMany({
      where: {
        name: query.name ? { contains: query.name, mode: 'insensitive' } : undefined,
        category: query.category ? { equals: query.category } : undefined,
        price: {
          gte: query.minPrice !== undefined ? query.minPrice : undefined,
          lte: query.maxPrice !== undefined ? query.maxPrice : undefined,
        },
        stock: {
          gte: query.minStock !== undefined ? query.minStock : undefined,
          lte: query.maxStock !== undefined ? query.maxStock : undefined,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return filteredProducts;
  }

  async createProduct(product: Product): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newProduct;
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: {
        ...product,
        updatedAt: new Date(),
      },
    });
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}
