import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  logger: any;
  context: string;

  constructor() {
    const winston = require('winston');
    this.logger = winston.loggers.get('logger');
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    this.context = uuidv4();
    const req = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const { originalUrl, method, params, query, body, user } = req;
    this.logger.info({
      string_message: `Intercept Request url:${originalUrl} ${method} user: ${user?.email}`,
      body: body || [],
      headers: req.headers,
      baseUrl: originalUrl,
      method: method,
      params: params,
      query: query,
      service: ResponseInterceptor.name,
      user: user,
    }, {traceId: req.traceId});

    return next.handle().pipe(
      tap((data) =>
        this.logger.info({
          statusCode: statusCode,
          body: data,
          headers: req.headers,
          service: ResponseInterceptor.name,
          user: user,
        }, {traceId: req.traceId}),
      ),
    );
  }
}
