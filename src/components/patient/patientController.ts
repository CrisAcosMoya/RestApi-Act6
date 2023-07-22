import { Request, Response } from "express";
import Patient from "./patientModel";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const { nombre, cedula, apellido, edad, telefono } = req.body;
    const patient = new Patient({ nombre, cedula, apellido, edad, telefono });
    await patient.save();
    res.status(201).json({ message: "Paciente creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el paciente" });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pacientes" });
  }
};