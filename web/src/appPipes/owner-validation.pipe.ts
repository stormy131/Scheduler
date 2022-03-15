import {ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform} from "@nestjs/common";
import {REQUEST} from "@nestjs/core";
import {Request} from "express";
import {ProjectsRepo} from "../database/repository/projects.repository";
import {TasksRepo} from "../database/repository/tasks.repository";

@Injectable()
export class OwnershipValidationPipe implements PipeTransform{
    private repos = {
        'projects': new ProjectsRepo(),
        'tasks': new TasksRepo()
    };

    constructor(@Inject(REQUEST) private req: Request) {}

    async transform(value: any, metadata: ArgumentMetadata): Promise<any>{
        if(metadata.type === 'body') return value;
        const module: string = this.req.originalUrl
            .split('/').slice(-2, -1).pop();

        const {owner} = await this.repos[module].checkOwner(value) || {};

        if(owner === this.req.body.user.id) return value;
        throw new BadRequestException('Ownership error');
    }
}