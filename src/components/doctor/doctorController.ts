import { Request, Response } from "express";
import Doctor from "./doctorModel";
import { doctorSpecialties } from "../utils/validation";

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, especialidades, consultorio, correo } = req.body;
    const doctor = new Doctor({ nombre, apellido, especialidades, consultorio, correo });
    await doctor.save();
    res.status(201).json({ message: "Doctor creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el doctor" });
  }
};

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los doctores" });
  }
};