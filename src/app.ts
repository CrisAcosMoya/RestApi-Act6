
import express from "express";
import doctorRoutes from "./components/doctor/doctorRoutes";
import patientRoutes from "./components/patient/patientRoutes";
import appointmentRoutes from "./components/appoinment/appoinmentRoutes";


const app = express();

app.use(express.json());

// Routes
app.use(doctorRoutes);
app.use(patientRoutes);
app.use(appointmentRoutes);

export default app;

  

