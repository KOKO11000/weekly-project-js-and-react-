import express from "express";
import router from "./routes/complaints.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/health",(req,res)=>{
    res.json({status:"OK"})
})

app.use("/api",router)

app.listen(port,()=>{
    console.log(`server run on http://localhost:${port} `);
    
})