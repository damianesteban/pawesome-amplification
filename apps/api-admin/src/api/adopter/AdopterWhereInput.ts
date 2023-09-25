import { AdoptionListRelationFilter } from "../adoption/AdoptionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { RescueListRelationFilter } from "../rescue/RescueListRelationFilter";

export type AdopterWhereInput = {
  adoptions?: AdoptionListRelationFilter;
  email?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
  pets?: RescueListRelationFilter;
};
