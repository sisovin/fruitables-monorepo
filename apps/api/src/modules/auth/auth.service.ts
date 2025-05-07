import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@nestjs/prisma';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (user && (await argon2.verify(user.password, pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    const hashedPassword = await argon2.hash(user.password);
    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
    return newUser;
  }
}
