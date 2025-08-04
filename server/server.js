import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());  
app.use(express.json());  // adding middleware to parse JSON requests

app.get("/" , (req,res) => {
    console.log("Server is running");
    res.send("Server is running");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});