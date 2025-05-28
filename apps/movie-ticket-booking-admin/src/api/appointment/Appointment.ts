export type Appointment = {
  appointmentDate: Date | null;
  appointmentTime: string | null;
  createdAt: Date;
  doctorId: string | null;
  id: string;
  patientId: string;
  updatedAt: Date;
};
