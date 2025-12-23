import { UserService } from "../services/user.service";
import { CreateUserDTO } from "../dtos/user.dtos";
import { Request, Response } from "express";
import z from "zod";

let userService = new UserService();

export class AuthController{
    async register (req: Request, res: Response){
        try{
            const parsedData = CreateUserDTO.safeParse(req.body); //validate request body
            if (!parsedData.success) { // validation failed
                return res.status(400).json(
                    {success:false, message: z. prettifyError(parsedData.error)}
                )
            }
            const userData: CreateUserDTO = parsedData.data;
            const newUser = await userService.createUser(userData);
            return res.status(201).json(
                {
                    success:true, message:"User Created", data: newUser
                }
            );
        }catch(error:Error |any){// Excemption handling
            return res.status(500).json(
                {
                    success:false, message:error.message || "Intenal server error"
                }
            );
        }
    }
}
