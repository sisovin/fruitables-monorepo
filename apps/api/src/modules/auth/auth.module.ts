import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { ResponseTransformInterceptor } from './interceptors/response-transform.interceptor';
import { RequestLoggingInterceptor } from './interceptors/request-logging.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';
import { ParseIntPipe } from './pipes/parse-int.pipe';
import { PrismaModule } from '@nestjs/prisma';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret_key',
      signOptions: { expiresIn: '60m' },
    }),
    PrismaModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestLoggingInterceptor,
    },
    ValidationPipe,
    ParseIntPipe,
  ],
  exports: [AuthService],
})
export class AuthModule {}
