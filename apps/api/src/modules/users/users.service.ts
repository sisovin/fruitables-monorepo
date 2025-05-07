import { Injectable } from '@nestjs/common';
import { User } from '@libs/shared-types/src/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(user: User): User {
    const newUser = {
      ...user,
      id: (this.users.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, user: User): User {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const updatedUser = {
      ...this.users[index],
      ...user,
      updatedAt: new Date(),
    };
    this.users[index] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
  }

  getUserById(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
