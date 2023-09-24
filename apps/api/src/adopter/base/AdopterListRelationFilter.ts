/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdopterWhereInput } from "./AdopterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdopterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdopterWhereInput,
  })
  @ValidateNested()
  @Type(() => AdopterWhereInput)
  @IsOptional()
  @Field(() => AdopterWhereInput, {
    nullable: true,
  })
  every?: AdopterWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdopterWhereInput,
  })
  @ValidateNested()
  @Type(() => AdopterWhereInput)
  @IsOptional()
  @Field(() => AdopterWhereInput, {
    nullable: true,
  })
  some?: AdopterWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdopterWhereInput,
  })
  @ValidateNested()
  @Type(() => AdopterWhereInput)
  @IsOptional()
  @Field(() => AdopterWhereInput, {
    nullable: true,
  })
  none?: AdopterWhereInput;
}
export { AdopterListRelationFilter as AdopterListRelationFilter };
