import { UserFilterDto } from "../models/user/UserFilter.dto";
import { UserListDto } from "../models/user/UserList.dto";
import { UserReadDto } from "../models/user/UserRead.dto";
import { UserWriteDto } from "../models/user/UserWrite.dto";
import { IBaseService } from "./base.service.interface";

export interface IUserService
  extends IBaseService<UserWriteDto, UserReadDto, UserListDto, UserFilterDto> {}
