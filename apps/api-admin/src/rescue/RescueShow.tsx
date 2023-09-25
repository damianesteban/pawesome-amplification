import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { ADOPTER_TITLE_FIELD } from "../adopter/AdopterTitle";
import { RESCUE_TITLE_FIELD } from "./RescueTitle";

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
        <ReferenceManyField
          reference="Adoption"
          target="rescueId"
          label="Adoptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="adopter"
              source="adopter.id"
              reference="Adopter"
            >
              <TextField source={ADOPTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="rescue"
              source="rescue.id"
              reference="Rescue"
            >
              <TextField source={RESCUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
