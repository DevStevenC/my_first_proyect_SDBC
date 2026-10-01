import { Body,Controller,HttpException,HttpStatus,Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    async login(
        @Body() Data: LoginDto
    ) {

        const usertoken = await this.authService.validateUser(Data);
        if (!usertoken) throw new HttpException('Invalid Credentials' , HttpStatus.UNAUTHORIZED);
        return usertoken;

    }

}
