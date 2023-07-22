import { Router } from "express";
import { createPatient, getPatients } from "./patientController";

const router = Router();

router.post("/patient", createPatient);
router.get("/patients", getPatients);

export default router;