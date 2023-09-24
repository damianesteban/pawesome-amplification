import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdopterService } from "./adopter.service";
import { AdopterControllerBase } from "./base/adopter.controller.base";

@swagger.ApiTags("adopters")
@common.Controller("adopters")
export class AdopterController extends AdopterControllerBase {
  constructor(protected readonly service: AdopterService) {
    super(service);
  }
}
