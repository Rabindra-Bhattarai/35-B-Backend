import { CreateUserDTO } from "../dtos/user.dtos";
import { UserRepository } from "../repositories/user.repository";
import bcryptjs from "bcryptjs";
import { HttpError } from "../errors/http-error"

let userRepository = new UserRepository();


export class UserService {
    async createUser (data: CreateUserDTO){
        //business logic before creating user
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new HttpError(400,"Email already in use");
        }
        const usernameCheck = await userRepository.getUserByUserName(data.username);
        if (usernameCheck){
            throw new HttpError (400, "Username already in use");
        }
        //hash password
        const hashPassword = await bcryptjs.hash(data.password, 10); //10 - complexity
        data.password= hashPassword;

        //create user
        const newUser = await userRepository.createUser(data);
        return newUser;
    }  
}
