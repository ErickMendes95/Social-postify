import { Module, forwardRef } from '@nestjs/common';
import { CreateUserController } from './useCases/create/create-user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './repository/user.repository';
import { CreateUserService } from './useCases/create/create-user.service';
import { FindAllController } from './useCases/findAll/find-all-user.controller';
import { FindByIdController } from './useCases/findById/find-by-id-user.controller';
import { findAllUserService } from './useCases/findAll/find-all-user.service';
import { findByIdService } from './useCases/findById/find-by-id-user.service';
import { UpdateUserController } from './useCases/update/update-user.controller';
import { DeleteUserController } from './useCases/delete/delete-user.controller';
import { UpdateUserService } from './useCases/update/update-user.service';
import { DeleteUserService } from './useCases/delete/delete-user.service';

@Module({
  controllers: [
    CreateUserController,
    FindAllController,
    FindByIdController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    PrismaService,
    UserRepository,
    CreateUserService,
    findAllUserService,
    findByIdService,
    UpdateUserService,
    DeleteUserService,
  ],
  exports: []
})
export class UserModule {}
