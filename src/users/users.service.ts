import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { GetAllDto } from './dto/get-all.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `a new user named ${createUserDto.name} and is ${createUserDto.age} years old`;
  }

  findAll(): GetAllDto {
    return { users: ['alice', 'bob', 'ali'] };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
