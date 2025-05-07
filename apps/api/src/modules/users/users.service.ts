import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nestjs/prisma';
import { User } from '@libs/shared-types/src/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newUser;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...user,
        updatedAt: new Date(),
      },
    });
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
