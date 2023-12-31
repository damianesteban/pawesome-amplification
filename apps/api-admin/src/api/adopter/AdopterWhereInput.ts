import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { RescueListRelationFilter } from "../rescue/RescueListRelationFilter";

export type AdopterWhereInput = {
  email?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
  pets?: RescueListRelationFilter;
};
