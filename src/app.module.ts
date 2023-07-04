import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublicationModule } from './modules/publication/publication.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, PublicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
