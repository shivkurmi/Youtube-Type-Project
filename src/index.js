// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import dataBaseConnection from './db/index.js'

dotenv.config({
  host:'./env'
})
dataBaseConnection()





























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