// apps/backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): { message: string; timestamp: number } {
    return {
      message: 'Backend connection successful!',
      timestamp: Date.now(),
    };
  }
}