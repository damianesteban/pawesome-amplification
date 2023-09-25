import { AdoptionWhereInput } from "./AdoptionWhereInput";
import { AdoptionOrderByInput } from "./AdoptionOrderByInput";

export type AdoptionFindManyArgs = {
  where?: AdoptionWhereInput;
  orderBy?: Array<AdoptionOrderByInput>;
  skip?: number;
  take?: number;
};
