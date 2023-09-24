import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ADOPTER_TITLE_FIELD } from "../adopter/AdopterTitle";

export const RescueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Adopter" source="adopter.id" reference="Adopter">
          <TextField source={ADOPTER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Age" source="age" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Species" source="species" />
      </SimpleShowLayout>
    </Show>
  );
};
