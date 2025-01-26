import { Injectable } from '@nestjs/common';
import { ERole } from 'src/util/enums/enums';
import * as bcrypt from 'bcrypt'
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
     constructor(
          private userService: UserService,
          private jwtService: JwtService
     ){}

     async register(user: CreateUserDto) {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return this.userService.create({...user, password: hashedPassword});
     }

     async validateUser(email:string, pass:string) :Promise<any> {
          const user = await this.userService.findByEmail(email);
          if(user && (await bcrypt.compare(pass, user.password))){
               const {password, ...result} = user;
               return result;
          }
          return null;
     }

     async login(user:any){
          const payload = {email:user.email, sub:user.id};
          return {
               acces_token: this.jwtService.sign(payload),
          }
     }
}
