import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  password?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
