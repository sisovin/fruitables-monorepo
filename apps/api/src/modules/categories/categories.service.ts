import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private categories = [];

  createCategory(name: string, parentId?: string) {
    const newCategory = {
      id: (this.categories.length + 1).toString(),
      name,
      parentId: parentId || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  getCategoryTree() {
    const buildTree = (parentId: string | null) => {
      return this.categories
        .filter((category) => category.parentId === parentId)
        .map((category) => ({
          ...category,
          children: buildTree(category.id),
        }));
    };
    return buildTree(null);
  }

  getProductCounts() {
    // Placeholder for actual implementation
    return this.categories.map((category) => ({
      ...category,
      productCount: Math.floor(Math.random() * 100), // Random count for now
    }));
  }
}
