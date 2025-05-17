import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import videoRouter from './routes/videoRoute.js';
import cors from 'cors';

dotenv.config()

const app=express()
app.use(json());
app.use(cors())

app.use('/auth',userRoute)
app.use('/api',videoRouter)

mongoose.connect(process.env.MONGODB_URL)
    const db=mongoose.connection
    db.on("open",()=>{
        console.log("connected successfully")
    })

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})