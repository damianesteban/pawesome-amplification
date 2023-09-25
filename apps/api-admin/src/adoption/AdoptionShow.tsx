import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADOPTER_TITLE_FIELD } from "../adopter/AdopterTitle";
import { RESCUE_TITLE_FIELD } from "../rescue/RescueTitle";

export const AdoptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="adopter" source="adopter.id" reference="Adopter">
          <TextField source={ADOPTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rescue" source="rescue.id" reference="Rescue">
          <TextField source={RESCUE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
