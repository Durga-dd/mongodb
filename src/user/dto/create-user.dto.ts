import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
// class Mark {
//   tam: string;
//   eng: string;
//   mat: string;
//   sci: string;
//   soc: string;
// }
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsNumber()
  @IsNotEmpty()
  mobileNumber: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  gender: string;
}
