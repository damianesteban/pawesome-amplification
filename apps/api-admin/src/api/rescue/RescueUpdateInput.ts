import { AdopterWhereUniqueInput } from "../adopter/AdopterWhereUniqueInput";

export type RescueUpdateInput = {
  adopter?: AdopterWhereUniqueInput | null;
  age?: number;
  name?: string;
  species?: string;
};
