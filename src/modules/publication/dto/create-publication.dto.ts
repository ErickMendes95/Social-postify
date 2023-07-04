import {
  IsBoolean,
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

  @IsDateString()
  @IsNotEmpty()
  @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
    message: 'A data precisa estar no formato yyyy-mm-dd',
  })
  dateToPublish: string;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean = false;

  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}
