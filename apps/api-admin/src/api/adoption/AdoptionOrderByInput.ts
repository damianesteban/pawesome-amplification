import { SortOrder } from "../../util/SortOrder";

export type AdoptionOrderByInput = {
  adopterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rescueId?: SortOrder;
  updatedAt?: SortOrder;
};
