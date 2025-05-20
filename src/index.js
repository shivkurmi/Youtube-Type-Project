// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import dataBaseConnection from './db/index.js'
import { app } from './app.js';

dotenv.config({
  host:'./env'
})
dataBaseConnection()
.then(()=>{
  app.listen(process.env.PORT || 3000,()=>{
    console.log(`Servering is runninng on port ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("Mongodb connnection failed ",err);
  
})





























/*
import express from "express"
const app=express()
(async()=>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`);
   console.log("Database successfully  connected");
   app.on("error",(error)=>{
    console.log("error",error);
    throw error;
   })
    
   app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
   })
  }
  catch(err){
    console.error(err);
    throw err;
    
  }
})() */