import { RescueCreateNestedManyWithoutAdoptersInput } from "./RescueCreateNestedManyWithoutAdoptersInput";

export type AdopterCreateInput = {
  email: string;
  name: string;
  pets?: RescueCreateNestedManyWithoutAdoptersInput;
};
