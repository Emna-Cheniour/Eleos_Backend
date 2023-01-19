/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose"
import { LocalStrategy } from "./local.auth";
import { UserService } from "../user/user.service";
import { UserSchema } from "../user/user.schema";
import { AuthController } from './auth.controller';



@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '3600s' },
  }), MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  providers: [AuthService, UserService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule { }