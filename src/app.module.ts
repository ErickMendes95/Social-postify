import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublicationModule } from './modules/publication/publication.module';
import { UserModule } from './modules/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PublicationModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
