/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RescueWhereUniqueInput } from "./RescueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RescueUpdateInput } from "./RescueUpdateInput";

@ArgsType()
class UpdateRescueArgs {
  @ApiProperty({
    required: true,
    type: () => RescueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RescueWhereUniqueInput)
  @Field(() => RescueWhereUniqueInput, { nullable: false })
  where!: RescueWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RescueUpdateInput,
  })
  @ValidateNested()
  @Type(() => RescueUpdateInput)
  @Field(() => RescueUpdateInput, { nullable: false })
  data!: RescueUpdateInput;
}

export { UpdateRescueArgs as UpdateRescueArgs };
