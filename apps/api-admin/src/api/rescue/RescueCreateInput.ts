import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { AdoptionCreateNestedManyWithoutRescuesInput } from "./AdoptionCreateNestedManyWithoutRescuesInput";

export type RescueCreateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  adoptions?: AdoptionCreateNestedManyWithoutRescuesInput;
  age: number;
  name: string;
  species: string;
};
