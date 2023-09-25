import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { AdoptionListRelationFilter } from "../adoption/AdoptionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type RescueWhereInput = {
  adopter?: AdopterWhereUniqueInput;
  adoptions?: AdoptionListRelationFilter;
  age?: IntFilter;
  id?: IntFilter;
  name?: StringFilter;
  species?: StringFilter;
};
