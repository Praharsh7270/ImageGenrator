import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './Config/Mongodb.js';
import UserRoutes from './Routes/UserRoutes.js';
import ImageRoutes from './Routes/ImageRoutes.js';

dotenv.config({ quiet: true });

const port = process.env.PORT || 5000;
const app = express();

await connectDB();
app.use(cors());  
app.use(express.json());  // adding middleware to parse JSON requests

app.get("/" , (req,res) => {
    console.log("Server is running");
    res.send("Server is running");
})

app.use("/api/user", UserRoutes());
app.use("/api/image", ImageRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});