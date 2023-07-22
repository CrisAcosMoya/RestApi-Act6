import { Request, Response } from "express";
import Appointment from "./appoinmentModel";

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { paciente, especialidades } = req.body;
    // Assume doctor data is already in the database
    const doctor = 'Doctor ID'; // Replace 'Doctor ID' with the actual doctor's ID
    const appointment = new Appointment({ paciente, doctor, especialidades });
    await appointment.save();
    res.status(201).json({ message: "Cita médica creada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la cita médica" });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find().populate("paciente doctor");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las citas médicas" });
  }
};