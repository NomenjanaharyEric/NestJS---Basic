import { IsEmail, IsString } from "class-validator";

export default class CreateUserDTO{

    id: number;

    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}