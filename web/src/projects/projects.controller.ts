import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { Request } from "express";
import { JwtGuard } from "src/appGuards/jwt.guard";
import { JwtInterceptor } from "src/appInterceptors/jwt.interceptor";
import { ProjectDto } from "./dto/project.dto";
import { ProjectsService } from "./projects.service";

@Controller('projects')
@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService){}

    @Get()
    async getAllProjects(@Req() req: Request){
        return await this.projectsService.getAllProjects(req);
    }

    @Get(':id')
    async getProjectById(@Param('id') id: string){
        return await this.projectsService.getProject(+id);
    }

    @Post()
    async createProject(@Req() req: Request, @Body() body: ProjectDto): Promise<boolean>{
        return await this.projectsService.createProject(req, body);
    }

    @Delete(':id')
    async deleteProject(@Param('id') id: string): Promise<boolean>{
        return await this.projectsService.deleteProject(+id);
    }

    @Patch(':id')
    async activateProject(@Param('id') id: string): Promise<boolean> {
        return await this.projectsService.changeActiveProject(+id);
    }
}