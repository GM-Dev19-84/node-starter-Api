import {Request,Response,Router} from "express";//Router = funxione  di node 
import * as db from "../db";
import {RegisterUserDTO} from "../models/api/user"


const router = Router();


router.post("/register",async(req:Request,resp:Response)=>{
    const user: RegisterUserDTO = req.body;
    

    console.log(req.body);

    await db.registerUser(user);

    resp.json({message:"tutt appost"});
  
});

router.get("/users",(req:Request,resp:Response)=>{

    resp.json([{id:1,nome:"mario"}]);
});
export  default router; 