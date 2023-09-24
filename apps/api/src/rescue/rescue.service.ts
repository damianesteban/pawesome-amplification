import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RescueServiceBase } from "./base/rescue.service.base";

@Injectable()
export class RescueService extends RescueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
