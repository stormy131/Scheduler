import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { TasksRepo } from '../database/repository/tasks.repository';
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        })
    ],
    controllers: [TasksController],
    providers: [TasksService, TasksRepo]
})
export class TasksModule{}