import {Request,Response,Router} from "express";//Router= sottoApplicazione di express

const router = Router();


router.get("/",(req:Request,resp:Response)=>{

    resp.send("<h1>Benvenuti sul Server</h1>");
});

router.get("/guida",(req:Request,resp:Response)=>{

    resp.send("<h1>Guida al Server</h1>");
});
export  default router;