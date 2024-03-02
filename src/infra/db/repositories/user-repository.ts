import { UserRepository } from '@/repositories';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { User } from '@/modules/user/entities/user.entity';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({ data: createUserDto });
  }
}
