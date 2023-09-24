import * as graphql from "@nestjs/graphql";
import { RescueResolverBase } from "./base/rescue.resolver.base";
import { Rescue } from "./base/Rescue";
import { RescueService } from "./rescue.service";

@graphql.Resolver(() => Rescue)
export class RescueResolver extends RescueResolverBase {
  constructor(protected readonly service: RescueService) {
    super(service);
  }
}
