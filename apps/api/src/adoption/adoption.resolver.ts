import * as graphql from "@nestjs/graphql";
import { AdoptionResolverBase } from "./base/adoption.resolver.base";
import { Adoption } from "./base/Adoption";
import { AdoptionService } from "./adoption.service";

@graphql.Resolver(() => Adoption)
export class AdoptionResolver extends AdoptionResolverBase {
  constructor(protected readonly service: AdoptionService) {
    super(service);
  }
}
