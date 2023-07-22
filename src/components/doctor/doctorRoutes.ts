import { Router } from "express";
import { createDoctor, getDoctors } from "./doctorController";

const router = Router();

router.post("/doctor", createDoctor);
router.get("/doctors", getDoctors);

export default router;