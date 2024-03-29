import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('/health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  getHealth(): any {
    return this.healthService.getHealth();
  }
}
