import * as graphql from "@nestjs/graphql";
import { AdopterResolverBase } from "./base/adopter.resolver.base";
import { Adopter } from "./base/Adopter";
import { AdopterService } from "./adopter.service";

@graphql.Resolver(() => Adopter)
export class AdopterResolver extends AdopterResolverBase {
  constructor(protected readonly service: AdopterService) {
    super(service);
  }
}
