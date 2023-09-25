/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateRescueArgs } from "./CreateRescueArgs";
import { UpdateRescueArgs } from "./UpdateRescueArgs";
import { DeleteRescueArgs } from "./DeleteRescueArgs";
import { RescueCountArgs } from "./RescueCountArgs";
import { RescueFindManyArgs } from "./RescueFindManyArgs";
import { RescueFindUniqueArgs } from "./RescueFindUniqueArgs";
import { Rescue } from "./Rescue";
import { AdoptionFindManyArgs } from "../../adoption/base/AdoptionFindManyArgs";
import { Adoption } from "../../adoption/base/Adoption";
import { Adopter } from "../../adopter/base/Adopter";
import { RescueService } from "../rescue.service";
@graphql.Resolver(() => Rescue)
export class RescueResolverBase {
  constructor(protected readonly service: RescueService) {}

  async _rescuesMeta(
    @graphql.Args() args: RescueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Rescue])
  async rescues(@graphql.Args() args: RescueFindManyArgs): Promise<Rescue[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Rescue, { nullable: true })
  async rescue(
    @graphql.Args() args: RescueFindUniqueArgs
  ): Promise<Rescue | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Rescue)
  async createRescue(@graphql.Args() args: CreateRescueArgs): Promise<Rescue> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        adopter: args.data.adopter
          ? {
              connect: args.data.adopter,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Rescue)
  async updateRescue(
    @graphql.Args() args: UpdateRescueArgs
  ): Promise<Rescue | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          adopter: args.data.adopter
            ? {
                connect: args.data.adopter,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Rescue)
  async deleteRescue(
    @graphql.Args() args: DeleteRescueArgs
  ): Promise<Rescue | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Adoption], { name: "adoptions" })
  async resolveFieldAdoptions(
    @graphql.Parent() parent: Rescue,
    @graphql.Args() args: AdoptionFindManyArgs
  ): Promise<Adoption[]> {
    const results = await this.service.findAdoptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Adopter, {
    nullable: true,
    name: "adopter",
  })
  async resolveFieldAdopter(
    @graphql.Parent() parent: Rescue
  ): Promise<Adopter | null> {
    const result = await this.service.getAdopter(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
