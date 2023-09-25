import { Adoption as TAdoption } from "../api/adoption/Adoption";

export const ADOPTION_TITLE_FIELD = "id";

export const AdoptionTitle = (record: TAdoption): string => {
  return record.id?.toString() || String(record.id);
};
