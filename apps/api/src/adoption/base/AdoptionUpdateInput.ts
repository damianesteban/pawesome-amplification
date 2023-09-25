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
import { AdopterWhereUniqueInput } from "../../adopter/base/AdopterWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RescueWhereUniqueInput } from "../../rescue/base/RescueWhereUniqueInput";

@InputType()
class AdoptionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdopterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdopterWhereUniqueInput)
  @IsOptional()
  @Field(() => AdopterWhereUniqueInput, {
    nullable: true,
  })
  adopter?: AdopterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RescueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RescueWhereUniqueInput)
  @IsOptional()
  @Field(() => RescueWhereUniqueInput, {
    nullable: true,
  })
  rescue?: RescueWhereUniqueInput | null;
}

export { AdoptionUpdateInput as AdoptionUpdateInput };
