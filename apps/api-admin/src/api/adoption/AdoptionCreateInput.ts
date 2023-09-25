import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { RescueWhereUniqueInput } from "../rescue/RescueWhereUniqueInput";

export type AdoptionCreateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  rescue?: RescueWhereUniqueInput | null;
};
