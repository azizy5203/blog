import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'Alice' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 25 })
  @IsNumber()
  age: number;
}
