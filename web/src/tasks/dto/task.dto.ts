import {IsBoolean, IsInt, IsNotEmpty, IsString} from "class-validator";

export class TaskDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly urgency: boolean;

    @IsBoolean()
    @IsNotEmpty()
    readonly importance: boolean;

    @IsString()
    @IsNotEmpty()
    readonly deadline: string;

    @IsInt()
    @IsNotEmpty()
    readonly fromProject: number;
}