import {Body, Controller, Delete, Param, Patch, Post, UseGuards, UseInterceptors, UsePipes} from "@nestjs/common";
import { JwtGuard } from "src/appGuards/jwt.guard";
import { JwtInterceptor } from "src/appInterceptors/jwt.interceptor";
import { TaskDto } from "./dto/task.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";
import { TasksService } from "./tasks.service";
import {IdValidationPipe} from "../appPipes/id-validator.pipe";

@Controller('tasks')
@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Post()
    async postTask(@Body() data: TaskDto): Promise<boolean>{
        return await this.tasksService.createTask(data);
    }

    @Patch(':id')
    @UsePipes(new IdValidationPipe('tasks'))
    async updateTask(@Param('id') id: string, @Body() data: UpdateTaskDto): Promise<boolean>{
        return await this.tasksService.updateTask(+id, data);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<boolean>{
        return await this.tasksService.deleteTask(+id);
    }
}