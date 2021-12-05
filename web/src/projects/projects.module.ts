import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ProjectsRepo } from "src/database/repository/projects.repository";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        })
    ],
    controllers: [ProjectsController],
    providers: [ProjectsService, ProjectsRepo]
})
export class ProjectsModule{}