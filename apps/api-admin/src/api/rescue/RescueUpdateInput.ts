import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";
import { AdoptionUpdateManyWithoutRescuesInput } from "./AdoptionUpdateManyWithoutRescuesInput";

export type RescueUpdateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  adoptions?: AdoptionUpdateManyWithoutRescuesInput;
  age?: number;
  name?: string;
  species?: string;
};
