import {IsBoolean, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly name?: string;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    readonly importance?: boolean;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    readonly urgency?: boolean;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly deadline?: string;
}