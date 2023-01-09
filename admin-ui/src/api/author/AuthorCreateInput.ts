import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
