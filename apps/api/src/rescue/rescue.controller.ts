import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RescueService } from "./rescue.service";
import { RescueControllerBase } from "./base/rescue.controller.base";

@swagger.ApiTags("rescues")
@common.Controller("rescues")
export class RescueController extends RescueControllerBase {
  constructor(protected readonly service: RescueService) {
    super(service);
  }
}
