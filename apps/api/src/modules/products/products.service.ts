import { Injectable } from '@nestjs/common';
import { ProductQueryDto } from './dto/product-query.dto';
import { Product } from '@libs/shared-types/src/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Apple',
      description: 'Fresh red apple',
      price: 1.5,
      imageUrl: 'apple.jpg',
      category: 'Fruits',
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Banana',
      description: 'Ripe yellow banana',
      price: 0.5,
      imageUrl: 'banana.jpg',
      category: 'Fruits',
      stock: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getProducts(query: ProductQueryDto, page: number = 1, limit: number = 10): Product[] {
    let filteredProducts = this.products;

    if (query.name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.name.toLowerCase()),
      );
    }

    if (query.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === query.category,
      );
    }

    if (query.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= query.minPrice,
      );
    }

    if (query.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= query.maxPrice,
      );
    }

    if (query.minStock !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.stock >= query.minStock,
      );
    }

    if (query.maxStock !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.stock <= query.maxStock,
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredProducts.slice(startIndex, endIndex);
  }

  createProduct(product: Product): Product {
    const newProduct = {
      ...product,
      id: (this.products.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: string, product: Product): Product {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const updatedProduct = {
      ...this.products[index],
      ...product,
      updatedAt: new Date(),
    };
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  deleteProduct(id: string): void {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
  }
}
