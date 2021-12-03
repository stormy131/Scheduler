import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    async getTasks(){
     //   return '456';
    }

    @Post()
    async psotTask(){

    }

    @Patch()
    async updateTask(){

    }

    @Delete()
    async deleteTask(){

    }
}