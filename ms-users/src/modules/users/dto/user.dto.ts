import { UserInterface } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { CommonEntityDto } from 'src/common/dto/common-entity.dto';

@Exclude()
export class UserDto extends CommonEntityDto implements UserInterface {
  @ApiProperty({
    title: 'User name',
    description: 'Name of the user',
    example: 'John Doe',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  @Expose()
  readonly name: string;

  @ApiProperty({
    title: 'User email',
    description: 'Email of the user',
    example: 'jhondoe@email.com',
  })
  @IsEmail()
  @Expose()
  readonly email: string;
}
