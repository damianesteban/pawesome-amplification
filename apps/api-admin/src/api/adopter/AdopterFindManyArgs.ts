import { AdopterWhereInput } from "./AdopterWhereInput";
import { AdopterOrderByInput } from "./AdopterOrderByInput";

export type AdopterFindManyArgs = {
  where?: AdopterWhereInput;
  orderBy?: Array<AdopterOrderByInput>;
  skip?: number;
  take?: number;
};
