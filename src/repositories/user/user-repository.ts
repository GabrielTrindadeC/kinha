import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { User } from '@/modules/user/entities/user.entity';

export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User>;
}
