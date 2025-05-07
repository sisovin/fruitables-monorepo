import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logInfo } from '@libs/utils/src/logger';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          logInfo(
            `${method} ${url} ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
