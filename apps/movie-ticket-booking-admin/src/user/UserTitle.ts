import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "password";

export const UserTitle = (record: TUser): string => {
  return record.password?.toString() || String(record.id);
};
