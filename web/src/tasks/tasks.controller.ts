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
    async getTasks(@Req() req: Request, @Body() data: {id?: number})
        : Promise<string | TaskDto | TaskDto[]>{
            if(!data.id){
                return await this.tasksService.getAllTasks(req);
            }

            return await this.tasksService.getTask(data.id);
    }

    @Post()
    async postTask(@Req() req: Request, @Body() data: TaskDto){
        await this.tasksService.createTask(req, data);
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