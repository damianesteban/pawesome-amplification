import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AdopterTitle } from "../adopter/AdopterTitle";
import { AdoptionTitle } from "../adoption/AdoptionTitle";

export const RescueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="adopter.id" reference="Adopter" label="Adopter">
          <SelectInput optionText={AdopterTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="adoptions"
          reference="Adoption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdoptionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Name" source="name" />
        <TextInput label="Species" source="species" />
      </SimpleForm>
    </Create>
  );
};
