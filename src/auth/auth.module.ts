import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from './auth.service';
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from "./auth.constant";
import { JwtStrategy } from "./auth.jwt.strategy";

@Module({
    controllers:[AuthController],
    imports:[
        UserModule, 
        PassportModule, 
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule{}