import mongoose from "mongoose"; /// database

interface IUser {       /// struttura dati del database

    nome:string;
    annoNascita:Number;
    genere:string;

}


const userSchema = new mongoose.Schema<IUser>({
    nome:{type:String,required:[true,"nome obbligatorio"]},
    annoNascita:{type:Number,required:[true,"anno obbligatorio"]},
    genere:{type:String,required:[true,"genere obbligatorio"]},
});

export const UserModel =  mongoose.model<IUser>("User",userSchema,"users");