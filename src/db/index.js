import mongoose from "mongoose";
import { db_Name } from "../contants.js";
 
const dataBaseConnection=async ()=>{
  try{
    const connect= await mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`)
    
    console.log("Mongodb connection is host ",connect.connection.host);
  }
  catch(err){
    console.log("error",err);
    
    process.exit(1)
  }
}

export default dataBaseConnection