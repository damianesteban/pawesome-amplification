import { Rescue } from "../rescue/Rescue";

export type Adopter = {
  email: string;
  id: number;
  name: string;
  pets?: Array<Rescue>;
};
