import { Adopter } from "../adopter/Adopter";

export type Rescue = {
  adopter?: Adopter | null;
  age: number;
  id: number;
  name: string;
  species: string;
};
