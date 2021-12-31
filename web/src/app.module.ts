import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountsModule } from './account/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/auth.strategy';
import { TokensRepo } from './database/repository/tokens.repository';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';

require('dotenv').config();

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    }),
    AuthModule, TasksModule, AccountsModule, ProjectsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dist')
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TokensRepo, GoogleStrategy],
})
export class AppModule {}
