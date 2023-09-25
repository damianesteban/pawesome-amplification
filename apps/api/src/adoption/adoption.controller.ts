import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdoptionService } from "./adoption.service";
import { AdoptionControllerBase } from "./base/adoption.controller.base";

@swagger.ApiTags("adoptions")
@common.Controller("adoptions")
export class AdoptionController extends AdoptionControllerBase {
  constructor(protected readonly service: AdoptionService) {
    super(service);
  }
}
