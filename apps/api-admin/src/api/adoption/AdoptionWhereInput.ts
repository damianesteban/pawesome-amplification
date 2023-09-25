import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RescueWhereUniqueInput } from "../rescue/RescueWhereUniqueInput";

export type AdoptionWhereInput = {
  adopter?: AdopterWhereUniqueInput;
  id?: StringFilter;
  rescue?: RescueWhereUniqueInput;
};
