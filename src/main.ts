import logger from './config/logger';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
//import { JwtGaurd } from './common/hook/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger }),
  );
  const reflector = new Reflector();
  //app.useGlobalGuards(new JwtGaurd(reflector));
  await app.listen(5000);
  //process.exit(1);
}
bootstrap();
