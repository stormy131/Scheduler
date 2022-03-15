import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RegistrationDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}