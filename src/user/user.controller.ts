import { Controller, Delete, Get, Param, Patch, Post, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import CreateUserDTO from './dto/user-create.dto';
import UpdateUserDTO from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    getUsers()
    {
        return this.userService.findAll();
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number)
    {
        return this.userService.findOneById(userId);
    }

    @Post()
    create(@Body() createUserDTO: CreateUserDTO){
        return this.userService.new(createUserDTO);
    }

    @Patch('/:userId')
    update(@Param('userId', ParseIntPipe) userId: number , @Body() updateUserDTO: UpdateUserDTO){
        return this.userService.update(userId, updateUserDTO);
    }

    @Delete('/:userId')
    remove(@Param('userId', ParseIntPipe) userId: number ){
        return this.userService.delete(userId);
    }

}
