import { Adopter as TAdopter } from "../api/adopter/Adopter";

export const ADOPTER_TITLE_FIELD = "name";

export const AdopterTitle = (record: TAdopter): string => {
  return record.name?.toString() || String(record.id);
};
