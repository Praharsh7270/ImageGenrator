import e from "express";

import { genrateImg } from '../Controllers/ImageController.js';
import userAuth from "../Middlewares/Auth.js";

const imageRouter = e.Router();

imageRouter.post("/generateImage" , userAuth, genrateImg);

export default imageRouter;