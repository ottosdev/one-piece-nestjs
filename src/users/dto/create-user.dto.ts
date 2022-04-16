import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { passwordRegex } from "src/utils/regres";



export class CreateUserDTO {

  
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegex, {message: "Password contains lower letter, upper letter and numbers "})
  password: string;
}