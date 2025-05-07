import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }

    return next.handle().pipe(
      tap(() => {
        // Additional logic if needed
      }),
    );
  }
}
