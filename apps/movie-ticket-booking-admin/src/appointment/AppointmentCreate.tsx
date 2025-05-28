import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="appointmentDate" source="appointmentDate" />
        <TextInput label="appointmentTime" source="appointmentTime" />
        <TextInput label="doctorId" source="doctorId" />
        <TextInput label="patientId" source="patientId" />
      </SimpleForm>
    </Create>
  );
};
