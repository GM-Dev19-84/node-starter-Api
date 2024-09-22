

import mongoose from "mongoose";
import {UserModel} from"./models/db/user";
import { RegisterUserDTO } from "./models/api/user";

const DB_NAME  = "Iscritti";

export const registerUser = async (yuser:RegisterUserDTO) =>{

    try {
        await mongoose.connect(process.env.MONGO_ATLASCONNECTION_STRING!, {dbName: DB_NAME});

        const newUser = new UserModel();
        newUser.nome = yuser.nome;
        newUser.annoNascita = yuser.annoNascita;
        newUser.genere = yuser.genere;

        return await newUser.save();


    } catch (error) {
        console.log(error);
    }
    finally{
        await mongoose.disconnect();
    }
}