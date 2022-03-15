import {ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform} from "@nestjs/common";
import {ProjectsRepo} from "../database/repository/projects.repository";
import {isNull} from "util";
import {TasksRepo} from "../database/repository/tasks.repository";
import {REQUEST} from "@nestjs/core";
import {Request} from "express";

@Injectable()
export class IdValidationPipe implements PipeTransform{
    private repos = {
        'projects': new ProjectsRepo(),
        'tasks': new TasksRepo()
    };

    constructor(@Inject(REQUEST) private req: Request){}

    async transform(value: number, metadata: ArgumentMetadata, ): Promise<number>{
        const module: string = this.req.originalUrl.split('/').slice(-2, -1).pop();
        const isValid = metadata.type === 'body' ||
            !isNull(await this.repos[module].checkId(value));

        if(isValid) return value;
        throw new BadRequestException('Invalid Id');
    }
}