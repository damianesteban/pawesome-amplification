import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type RescueWhereInput = {
  adopter?: AdopterWhereUniqueInput;
  age?: IntFilter;
  id?: IntFilter;
  name?: StringFilter;
  species?: StringFilter;
};
