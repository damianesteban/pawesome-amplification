import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { RescueWhereUniqueInput } from "../rescue/RescueWhereUniqueInput";

export type AdoptionUpdateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  rescue?: RescueWhereUniqueInput | null;
};
