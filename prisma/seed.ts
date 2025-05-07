import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      phoneNumber: '123-456-7890',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password123',
      firstName: 'Jane',
      lastName: 'Doe',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
  });

  // Seed Categories
  const category1 = await prisma.category.create({
    data: {
      name: 'Fruits',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Vegetables',
    },
  });

  // Seed Products
  const product1 = await prisma.product.create({
    data: {
      name: 'Apple',
      description: 'A juicy red apple',
      price: 1.5,
      imageUrl: 'https://example.com/apple.jpg',
      categoryId: category1.id,
      stock: 100,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Carrot',
      description: 'A fresh orange carrot',
      price: 0.5,
      imageUrl: 'https://example.com/carrot.jpg',
      categoryId: category2.id,
      stock: 200,
    },
  });

  // Seed Orders
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      status: 'PENDING',
      products: {
        connect: [{ id: product1.id }, { id: product2.id }],
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user2.id,
      status: 'SHIPPED',
      products: {
        connect: [{ id: product1.id }],
      },
    },
  });

  // Seed Reviews
  const review1 = await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Great apple!',
      userId: user1.id,
      productId: product1.id,
    },
  });

  const review2 = await prisma.review.create({
    data: {
      rating: 4,
      comment: 'Fresh carrot!',
      userId: user2.id,
      productId: product2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
