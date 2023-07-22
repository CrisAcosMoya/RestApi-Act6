import { Schema, model } from "mongoose";
import { doctorSpecialties } from "../utils/validation";

const doctorSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  especialidades: { type: [String], enum: doctorSpecialties, required: true },
  consultorio: { type: String, required: true },
  correo: { type: String, required: true },
});

export default model("Doctor", doctorSchema);