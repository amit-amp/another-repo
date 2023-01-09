import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
