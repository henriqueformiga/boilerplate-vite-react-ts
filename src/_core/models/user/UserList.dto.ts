import { BaseDto } from "../../_base.dto";

export class UserListDto extends BaseDto {
  name: string;
  birthdate: string;
  age: string;
  email: string;

  constructor(obj?: any) {
    super(obj);
    this.name = obj?.name;
    this.birthdate = obj?.birthdate;
    this.age = obj?.age;
    this.email = obj?.email;
  }
}
