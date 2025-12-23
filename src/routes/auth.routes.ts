import { AuthController } from "../controllers/auth.controller";
import { Router } from "express";

let authController = new AuthController ();
const authRoutes = Router();


authRoutes.post ("/register", authController.register)

//add remaining routes like login and logout, etc.

export default authRoutes;