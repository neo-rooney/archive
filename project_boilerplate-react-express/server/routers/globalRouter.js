import express from "express";
import routes from "../routes";
import {
    getRegister,
    postRegister,
    postLogin,
    getAuth,
    logout
} from "../controllers/userController";
import { home } from "../controllers/videoController";
import auth from "../middlewares/auth";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.register, getRegister);
globalRouter.post(routes.register, postRegister);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.auth, auth, getAuth);
globalRouter.get(routes.logout, auth, logout);

export default globalRouter;
