import { Adopter } from "../adopter/Adopter";
import { Rescue } from "../rescue/Rescue";

export type Adoption = {
  adopter?: Adopter | null;
  createdAt: Date;
  id: string;
  rescue?: Rescue | null;
  updatedAt: Date;
};
