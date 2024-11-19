import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"

import {server, serverApp} from "./SocketIO/socketserver.js"


dotenv.config()
const PORT = process.env.PORT || 4001;
const URI=process.env.MONGODB_URI;





serverApp.use(express.json())
serverApp.use(cookieParser())
serverApp.use(cors())

try{
mongoose.connect(URI)
console.log("DB Connected Succesfully");

}
catch(error)
{
    console.log(error);
    
}

serverApp.use("/api/user",userRoute)
serverApp.use("/api/message",messageRoute)


server.listen(PORT,()=>{
    console.log(`App Listning on PORT:${PORT}`);
    
})