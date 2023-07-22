import { Router } from "express";
import { createAppointment, getAppointments } from "./appoinmentController";

const router = Router();

router.post("/appointment", createAppointment);
router.get("/appointments", getAppointments);

export default router;