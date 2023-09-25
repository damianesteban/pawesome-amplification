import { Adoption } from "../adoption/Adoption";
import { Rescue } from "../rescue/Rescue";

export type Adopter = {
  adoptions?: Array<Adoption>;
  email: string;
  id: number;
  name: string;
  pets?: Array<Rescue>;
};
