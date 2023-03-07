import { IsString, IsEmail } from "class-validator";

export default class UpdateUserDTO{

    @IsString()
    name: string;

    @IsEmail()
    email: string;
}