import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/routes.js";

dotenv.config();

const app=express();

//middleware
app.use(cors());
app.use(express.json());

//Db connection
connectDB();

//Routes
app.use("/api/users",userRoutes);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})