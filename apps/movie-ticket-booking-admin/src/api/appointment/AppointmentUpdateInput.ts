export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  appointmentTime?: string | null;
  doctorId?: string | null;
  patientId?: string;
};
