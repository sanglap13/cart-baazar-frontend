import { TUser } from "../interfaces/user.types";

export type TMessageResponse = {
  success: boolean;
  message: string;
};

export type TUserResponse = {
  success: boolean;
  user: TUser;
};
