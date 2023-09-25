import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdopterTitle } from "../adopter/AdopterTitle";
import { RescueTitle } from "../rescue/RescueTitle";

export const AdoptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="adopter.id" reference="Adopter" label="adopter">
          <SelectInput optionText={AdopterTitle} />
        </ReferenceInput>
        <ReferenceInput source="rescue.id" reference="Rescue" label="rescue">
          <SelectInput optionText={RescueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
