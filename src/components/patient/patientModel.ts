import { Schema, model } from "mongoose";

const patientSchema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },
});

export default model("Patient", patientSchema);