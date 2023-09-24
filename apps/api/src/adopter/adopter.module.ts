import { Module } from "@nestjs/common";
import { AdopterModuleBase } from "./base/adopter.module.base";
import { AdopterService } from "./adopter.service";
import { AdopterController } from "./adopter.controller";
import { AdopterResolver } from "./adopter.resolver";

@Module({
  imports: [AdopterModuleBase],
  controllers: [AdopterController],
  providers: [AdopterService, AdopterResolver],
  exports: [AdopterService],
})
export class AdopterModule {}
