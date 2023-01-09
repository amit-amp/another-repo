import { User } from "../user/User";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  user?: User | null;
};
