import { AdoptionCreateNestedManyWithoutAdoptersInput } from "./AdoptionCreateNestedManyWithoutAdoptersInput";
import { RescueCreateNestedManyWithoutAdoptersInput } from "./RescueCreateNestedManyWithoutAdoptersInput";

export type AdopterCreateInput = {
  adoptions?: AdoptionCreateNestedManyWithoutAdoptersInput;
  email: string;
  name: string;
  pets?: RescueCreateNestedManyWithoutAdoptersInput;
};
