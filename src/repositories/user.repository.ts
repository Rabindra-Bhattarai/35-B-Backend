import { UserModel, IUser } from "../models/user.models";


export interface IUserRepository {
    createUser (userData: Partial<IUser>): Promise<IUser>
    getUserByEmail(email: string):Promise <IUser | null > ;
    getUserByUserName (username: string): Promise<IUser | null>;
}

//MongoBb Implementaion of User Repository
export class UserRepository implements IUserRepository{
    async createUser (userData: Partial <IUser>): Promise<IUser>{
        const user = new UserModel (userData);
        return await user.save();
    }
    async getUserByEmail (email: string):Promise <IUser | null >{
        const user = await UserModel.findOne({"email": email});
        return user;
    }
    async  getUserByUserName (username: string): Promise<IUser | null>{
        const user = await UserModel.findOne({"username": username});
        return user;
    }

}