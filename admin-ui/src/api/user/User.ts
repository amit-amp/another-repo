import { JsonValue } from "type-fest";
import { Author } from "../author/Author";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  author?: Author | null;
};
