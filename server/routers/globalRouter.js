import express from "express";
import routes from "../routes";
import { getRegister, postRegister } from "../controllers/userController";
import { home } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.register, getRegister);
globalRouter.post(routes.register, postRegister);

export default globalRouter;
