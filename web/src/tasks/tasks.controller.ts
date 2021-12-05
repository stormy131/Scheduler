import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { Request } from "express";
import { JwtGuard } from "src/appGuards/jwt.guard";
import { JwtInterceptor } from "src/appInterceptors/jwt.interceptor";
import { TaskDto } from "./dto/task.dto";
import { UpdateTaskDto } from "./dto/updateTask";
import { TasksService } from "./tasks.service";

@Controller('tasks')
@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    async getTasks(@Body() data: {fromProject: number})
        : Promise<string | TaskDto | TaskDto[]> {
            return await this.tasksService.getAllTasks(data);
    }

    @Post()
    async postTask(@Body() data: TaskDto){
        await this.tasksService.createTask(data);
    }

    @Patch(':id')
    async updateTask(@Param('id') id: string, @Body() data: UpdateTaskDto){
        await this.tasksService.updateTask(+id, data);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        await this.tasksService.deleteTask(+id);
    }
}