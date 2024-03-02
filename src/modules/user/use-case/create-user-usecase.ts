import { UseCase } from '@/core/base';
import { UserRepository } from '@/repositories';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

type Output = {
  user: User;
};

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserDto, Output> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<Output> {
    const user = await this.userRepository.create(input);
    return { user };
  }
}
