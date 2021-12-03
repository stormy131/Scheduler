require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import configDB from './database/config';
import seq from './database/connection';

async function bootstrap() {
  configDB();

  await seq.sync({force: true});

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.useStaticAssets(join(__dirname, '..', 'static'));
  await app.listen(process.env.PORT);
}
bootstrap();
