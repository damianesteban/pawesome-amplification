import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AdopterTitle } from "../adopter/AdopterTitle";

export const RescueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="adopter.id" reference="Adopter" label="Adopter">
          <SelectInput optionText={AdopterTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Name" source="name" />
        <TextInput label="Species" source="species" />
      </SimpleForm>
    </Create>
  );
};
