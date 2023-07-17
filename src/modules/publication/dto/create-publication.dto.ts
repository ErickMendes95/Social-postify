import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class CreatePublicationDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'A data precisa estar no formato yyyy-mm-dd' })
  @IsNotEmpty()
  dateToPublish: string;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean = false;

  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}
