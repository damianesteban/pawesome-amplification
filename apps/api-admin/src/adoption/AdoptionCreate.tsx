import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdopterTitle } from "../adopter/AdopterTitle";
import { RescueTitle } from "../rescue/RescueTitle";

export const AdoptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="adopter.id" reference="Adopter" label="adopter">
          <SelectInput optionText={AdopterTitle} />
        </ReferenceInput>
        <ReferenceInput source="rescue.id" reference="Rescue" label="rescue">
          <SelectInput optionText={RescueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
