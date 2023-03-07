import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {

    findAll(){
        return "find all users"
    }

    findOneById(userId: number){
        return `Find one user with Id ${userId}`;
    }

    new(user: User)
    {
        return user;
    }

    update(userId: number, user: User)
    {
        return { param: userId, user};
    }

    delete(userId: number)
    {
        return userId;
    }

}
