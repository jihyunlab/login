import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  async use(req: Request, res: Response, next: NextFunction) {
    const now = Date.now();

    this.logger.log(`${req.method} ${req.originalUrl} - ${req.get('user-agent') || ''} ${req.ip}`);

    res.on('finish', () => {
      this.logger.log(`${req.method}(${res.statusCode}) ${req.originalUrl} - ${Date.now() - now}ms`);
    });

    next();
  }
}
