import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { Author } from "./base/Author";
import { AuthorServiceBase } from "./base/author.service.base";

@Injectable()
export class AuthorService extends AuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  findMany<T extends Prisma.AuthorFindManyArgs>(args: Prisma.SelectSubset<T, Prisma.AuthorFindManyArgs>): Promise<Author[]> {
    return this.prisma.author.findMany(args);
  }
}
