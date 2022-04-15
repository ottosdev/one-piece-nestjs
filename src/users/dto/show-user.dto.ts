import { IsNotEmpty } from "class-validator";

export class ShowUserDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}