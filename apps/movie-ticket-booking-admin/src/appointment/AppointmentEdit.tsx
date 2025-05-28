import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="appointmentDate" source="appointmentDate" />
        <TextInput label="appointmentTime" source="appointmentTime" />
        <TextInput label="doctorId" source="doctorId" />
        <TextInput label="patientId" source="patientId" />
      </SimpleForm>
    </Edit>
  );
};
