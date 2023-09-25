import { AdoptionUpdateManyWithoutAdoptersInput } from "./AdoptionUpdateManyWithoutAdoptersInput";
import { RescueUpdateManyWithoutAdoptersInput } from "./RescueUpdateManyWithoutAdoptersInput";

export type AdopterUpdateInput = {
  adoptions?: AdoptionUpdateManyWithoutAdoptersInput;
  email?: string;
  name?: string;
  pets?: RescueUpdateManyWithoutAdoptersInput;
};
