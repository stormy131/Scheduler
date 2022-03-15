import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {ProjectsRepo} from "../database/repository/projects.repository";
import {isNull} from "util";
import {TasksRepo} from "../database/repository/tasks.repository";

@Injectable()
export class IdValidationPipe implements PipeTransform{
    private repo;

    constructor(module){
        this.repo = new (module === 'tasks' ? TasksRepo : ProjectsRepo)();
    }

    async transform(value: number, metadata: ArgumentMetadata, ): Promise<number>{
        if(metadata.type === 'body' || !isNull(await this.repo.checkId(value))) return value;
        throw new BadRequestException('Invalid Id');
    }
}