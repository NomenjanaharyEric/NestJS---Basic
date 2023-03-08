import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOneById(id: number): Promise<User>{
        return this.userRepository.findOne({ where: { id }});
    }

    findOne(email: string){
        return this.userRepository.findOne({ where: {email}});
    }

    new(user: User)
    {
        return this.userRepository.save(user);
    }

    update(id: number, user: User)
    {
        return this.userRepository.update(id, user);
    }

    delete(id: number)
    {
        return this.userRepository.delete(id);
    }

}
