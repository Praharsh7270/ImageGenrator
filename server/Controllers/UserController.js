import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const RegisterUser = async (req,res) =>{
    try{
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
            
        }

        const newUser = new UserModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(201).json({success:true, user, token });
    }
    catch(err) {
        console.error("Error in RegisterUser:", err);
        res.status(500).json({success:false, message: "Internal server error" });
    }
}


const LoginUser = async (req,res) =>{
    try{
        const {email, password} = req.body;

        const user = await UserModel.findOne({ email});
        if(!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) {  
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(200).json({success:true, user, token });
    }
    catch (err) {
        console.error("Error in LoginUser:", err);
        res.status(500).json({success:false, message: "Internal server error" });
    }
}

const userCredits = async (req,res) => {
    try{
        const {userId} = req.body; // Assuming you have middleware to set req.user
        
        const user = await UserModel.findById(userId);
        res.json({success:true, credits: user.credits, user: user.name});
    }
    catch(err){
        console.error("Error in userCredits:", err);
        res.status(500).json({success:false, message: "Internal server error" });
    }
}


export { RegisterUser, LoginUser, userCredits };