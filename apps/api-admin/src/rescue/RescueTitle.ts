import { Rescue as TRescue } from "../api/rescue/Rescue";

export const RESCUE_TITLE_FIELD = "name";

export const RescueTitle = (record: TRescue): string => {
  return record.name?.toString() || String(record.id);
};
