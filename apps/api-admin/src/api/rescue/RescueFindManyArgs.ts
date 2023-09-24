import { RescueWhereInput } from "./RescueWhereInput";
import { RescueOrderByInput } from "./RescueOrderByInput";

export type RescueFindManyArgs = {
  where?: RescueWhereInput;
  orderBy?: Array<RescueOrderByInput>;
  skip?: number;
  take?: number;
};
