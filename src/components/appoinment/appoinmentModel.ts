import { Schema, model } from "mongoose";
import { doctorSpecialties } from "../utils/validation";

const appointmentSchema = new Schema({
  paciente: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
  especialidades: { type: [String], enum: doctorSpecialties, required: true },
});

export default model("Appointment", appointmentSchema);