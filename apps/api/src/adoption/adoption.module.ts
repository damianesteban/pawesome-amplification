import { Module } from "@nestjs/common";
import { AdoptionModuleBase } from "./base/adoption.module.base";
import { AdoptionService } from "./adoption.service";
import { AdoptionController } from "./adoption.controller";
import { AdoptionResolver } from "./adoption.resolver";

@Module({
  imports: [AdoptionModuleBase],
  controllers: [AdoptionController],
  providers: [AdoptionService, AdoptionResolver],
  exports: [AdoptionService],
})
export class AdoptionModule {}
