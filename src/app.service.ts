import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Infraestructura como codigo (IaC) - Grupo Matrix';
  }
}
