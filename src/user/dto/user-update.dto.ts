import { IsString, IsEmail } from "class-validator";

export default class UpdateUserDTO{

    id: number;
    
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}