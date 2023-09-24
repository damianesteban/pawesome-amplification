import { Module } from "@nestjs/common";
import { RescueModuleBase } from "./base/rescue.module.base";
import { RescueService } from "./rescue.service";
import { RescueController } from "./rescue.controller";
import { RescueResolver } from "./rescue.resolver";

@Module({
  imports: [RescueModuleBase],
  controllers: [RescueController],
  providers: [RescueService, RescueResolver],
  exports: [RescueService],
})
export class RescueModule {}
