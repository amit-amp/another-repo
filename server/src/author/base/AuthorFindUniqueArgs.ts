/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";

@ArgsType()
class AuthorFindUniqueArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}

export { AuthorFindUniqueArgs };
