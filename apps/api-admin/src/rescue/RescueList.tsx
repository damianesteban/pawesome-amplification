import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADOPTER_TITLE_FIELD } from "../adopter/AdopterTitle";

export const RescueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rescues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Adopter" source="adopter.id" reference="Adopter">
          <TextField source={ADOPTER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Age" source="age" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Species" source="species" />
      </Datagrid>
    </List>
  );
};
