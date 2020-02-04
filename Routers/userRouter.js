import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";
import { olnyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, olnyPrivate, editProfile);
userRouter.get(routes.userDetail(), olnyPrivate, userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
