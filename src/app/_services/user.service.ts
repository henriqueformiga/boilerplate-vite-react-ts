import { UserFilterDto } from "./../../_core/models/user/UserFilter.dto";
import { UserListDto } from "./../../_core/models/user/UserList.dto";
import { UserReadDto } from "./../../_core/models/user/UserRead.dto";
import { UserWriteDto } from "./../../_core/models/user/UserWrite.dto";
import { IUserService } from "./../../_core/services/user.service.interface";
import { BaseService } from "./_base.service";

export class UserService
  extends BaseService<UserWriteDto, UserReadDto, UserListDto, UserFilterDto>
  implements IUserService
{
  constructor() {
    super("user");
  }
}
