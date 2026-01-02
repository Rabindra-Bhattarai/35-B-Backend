import { Router } from "express";

//import admin controller
import { authorizedMiddleware } from "../../middlewares/authorized.middleware";
import { AdminUserController } from "../../controllers/user.controller";

let adminUserController = new AdminUserController();
const router = Router();

router.get( "/:id", authorizedMiddleware, adminUserController.getOneUser);
//define admin user routes

export default router;