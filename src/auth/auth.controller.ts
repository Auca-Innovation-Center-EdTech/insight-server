import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
     constructor(
          private authService:AuthService
     ) {}

     @Post('register')
     register(@Body() user: CreateUserDto) {
          return this.authService.register(user );
     }

     @UseGuards(LocalAuthGuard)
     @Post('login')
     login(@Request() req) {
          console.log(req.user)
          if(req.user) return this.authService.login(req.user)
     }

     @UseGuards(LocalAuthGuard)
     @Post('logout')
     logout(@Request() req){
          return req.logout();
     }

     @UseGuards(JwtAuthGuard)
     @Get('profile')
     getUseInfo(@Request() req){
          return req.user;
     }
}
