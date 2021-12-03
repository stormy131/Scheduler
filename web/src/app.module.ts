import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    AuthModule, TasksModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
