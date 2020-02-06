import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    changePassword,
    postEditProfile
} from "../controllers/userController";
import { olnyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, olnyPrivate, getEditProfile);
userRouter.post(routes.editProfile, olnyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, olnyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
