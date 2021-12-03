require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configDB from './database/config';
import seq from './database/connection';

async function bootstrap() {
  configDB();

  await seq.sync({force: true});

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
