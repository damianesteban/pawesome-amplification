import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";

export type RescueCreateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  age: number;
  name: string;
  species: string;
};
