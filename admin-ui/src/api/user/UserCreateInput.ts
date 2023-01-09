import { InputJsonValue } from "../../types";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  author?: AuthorWhereUniqueInput | null;
};
