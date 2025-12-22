import mongoose, { Document, Schema } from "mongoose";
import { UserType } from "../types/user.type";

const UserSchema: Schema = new Schema<UserType>(
    {
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        username: { type: String, required: true, unique:true},
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},

        role:{
            type:String,
            enum:['user', 'admin'],
            default: 'user'
        } 
    },
    {
        timestamps:true, //auto createdAt and updateAt
    }
);


export interface IUser extends UserType, Document { //combine USertYpe and Document
    _id: mongoose.Types.ObjectId; //mongi related attribute/custom attributes
    createAt: Date;
    updateAt: Date;
}

export const UserModel = mongoose.model<IUser>('User', UserSchema);
//UserModel is the mongooose model for user collection
//db.users in MongoDB