/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Adopter } from "../../adopter/base/Adopter";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Rescue {
  @ApiProperty({
    required: false,
    type: () => Adopter,
  })
  @ValidateNested()
  @Type(() => Adopter)
  @IsOptional()
  adopter?: Adopter | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  age!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  species!: string;
}

export { Rescue as Rescue };
