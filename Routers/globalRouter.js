import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout
} from "../controllers/userController";
import { olnyPublic } from "../middlewares";

const globalRouter = express.Router();
globalRouter.get(routes.join, olnyPublic, getJoin);
globalRouter.post(routes.join, olnyPublic, postJoin, postLogin);

globalRouter.get(routes.login, olnyPublic, getLogin);
globalRouter.post(routes.login, olnyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
