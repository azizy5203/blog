import { ApiProperty } from '@nestjs/swagger';
export class GetAllDto {
  @ApiProperty({ type: [String] })
  users: string[];
}
