import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AdoptionTitle } from "../adoption/AdoptionTitle";
import { RescueTitle } from "../rescue/RescueTitle";

export const AdopterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adoptions"
          reference="Adoption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdoptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="pets"
          reference="Rescue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RescueTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
