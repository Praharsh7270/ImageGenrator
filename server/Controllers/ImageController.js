import axios from "axios";
import UserModel from "../Models/UserModel.js";
import FormData from 'form-data';

export const genrateImg = async (req, res) => {
    try {

        const { userId, prompt } = req.body;

        const user = await UserModel.findById(userId);
        if (!user || !prompt) {
            return res.status(400).json({ success: false, message: "Invalid user or prompt" });
        }

        if (user.credits <= 0) {
            return res.status(400).json({ success: false, message: "Insufficient credits" });
        }

        const formData = new FormData();
        formData.append('prompt', prompt);


        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_api,
            },
            responseType: 'arraybuffer',
        })

        const base64 = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64}`;

        await UserModel.findByIdAndUpdate(userId, {
            $inc: { credits: -1 }
        });

        res.json({ success: true, image: resultImage , message: "Image generated successfully", resultImage });

    }
    catch (err) {
        console.error("Error in genrateImg:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
} 