import { Injectable } from "@nestjs/common";
import { TasksRepo } from "../database/repository/tasks.repository";
import { Task, UpdateTask } from "./interfaces/task.interface";
import tryWrapper from "../utils/wrapper";

@Injectable()
export class TasksService{
    constructor(private readonly tasksRepo: TasksRepo){}

    async createTask(task: Task): Promise<boolean> {
        return await tryWrapper(this.tasksRepo.create, task);
    }

    async updateTask(id: number, newValues: UpdateTask): Promise<boolean> {
        return await tryWrapper(this.tasksRepo.update, id, newValues);
    }

    async deleteTask(id: number): Promise<boolean> {
        return await tryWrapper(this.tasksRepo.delete, id);
    }
}