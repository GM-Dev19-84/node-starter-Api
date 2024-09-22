import {config} from "dotenv";
config();
import express,{Request,Response,NextFunction} from "express";
import morgan from "morgan";
import pagesRouter from "./routes/pages";
import apiRouter from "./routes/api";



const app = express();
const port = Number(process.env.PORT)  || 3000;


//log rischiesta du DB


//logging middleware:
app.use(morgan("combined"))  //dev  combined  tiny


app.use(express.json());//middleware inrterno a express che fa il parseing

app.use("/",pagesRouter); //import pages router dall index
//oppure  app.use("/pagine",pagesRouter); //import pages router



app.use("/api",apiRouter)


app.listen(port,() =>{
    console.log(process.env.MONGO_ATLASCONNECTION_STRING)
    console.log(`Server in ascolto su http://localhost:${port}`);
    
});



