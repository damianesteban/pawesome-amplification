import { RescueUpdateManyWithoutAdoptersInput } from "./RescueUpdateManyWithoutAdoptersInput";

export type AdopterUpdateInput = {
  email?: string;
  name?: string;
  pets?: RescueUpdateManyWithoutAdoptersInput;
};
