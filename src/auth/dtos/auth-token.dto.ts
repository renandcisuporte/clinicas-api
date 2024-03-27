import { ApiProperty } from '@nestjs/swagger';

export class AuthTokeDTO {
  @ApiProperty()
  token: string;
}
