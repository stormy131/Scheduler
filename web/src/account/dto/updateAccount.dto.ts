import {IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateAccountDto{
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    password?: string;
}