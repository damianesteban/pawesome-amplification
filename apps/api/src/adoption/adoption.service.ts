import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdoptionServiceBase } from "./base/adoption.service.base";

@Injectable()
export class AdoptionService extends AdoptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
