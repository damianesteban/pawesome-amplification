import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADOPTER_TITLE_FIELD } from "./AdopterTitle";

export const AdopterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Rescue"
          target="adopterId"
          label="Rescues"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Adopter"
              source="adopter.id"
              reference="Adopter"
            >
              <TextField source={ADOPTER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Age" source="age" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Species" source="species" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
