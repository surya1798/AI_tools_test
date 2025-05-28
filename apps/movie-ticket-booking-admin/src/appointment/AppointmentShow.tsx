import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appointmentDate" source="appointmentDate" />
        <TextField label="appointmentTime" source="appointmentTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="doctorId" source="doctorId" />
        <TextField label="ID" source="id" />
        <TextField label="patientId" source="patientId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
