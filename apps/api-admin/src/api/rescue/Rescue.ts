import { Adopter } from "../adopter/Adopter";
import { Adoption } from "../adoption/Adoption";

export type Rescue = {
  adopter?: Adopter | null;
  adoptions?: Array<Adoption>;
  age: number;
  id: number;
  name: string;
  species: string;
};
