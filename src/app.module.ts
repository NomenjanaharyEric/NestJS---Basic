import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from './profile/profile.module';

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProfileModule,
  ],
})
export class AppModule{}