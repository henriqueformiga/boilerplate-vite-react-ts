import { BaseDto } from "../../_base.dto";

export class UserFilterDto extends BaseDto {
  name: string;
  email: string;

  constructor(obj?: any) {
    super(obj);
    this.name = obj?.name;
    this.email = obj?.email;
  }
}
