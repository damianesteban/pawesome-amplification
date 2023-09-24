import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdopterServiceBase } from "./base/adopter.service.base";

@Injectable()
export class AdopterService extends AdopterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
