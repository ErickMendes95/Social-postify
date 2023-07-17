import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class SignInDTO {
  @IsEmail()
  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(6, 20)
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
