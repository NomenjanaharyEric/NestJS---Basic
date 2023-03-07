import { IsEmail, IsString } from "class-validator";

export default class CreateUserDTO{

    @IsString()
    name: string;

    @IsEmail()
    email: string;
}