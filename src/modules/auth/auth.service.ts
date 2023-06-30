import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/repository/user.repository';
import { SigninUserDTO } from './dto/signin-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository){}

    async singin(data: SigninUserDTO){
        const user = await this.userRepository.findByEmail(data.email);
        if(!user) throw new Error('User or password are invalid')

        const password = bcrypt.compareSync(data.password,user.password);
        if(!password) throw new Error('User or password are invalid')

        // const token = jwt.sign();
        // return token
    }
}
