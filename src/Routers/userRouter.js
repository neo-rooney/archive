//by Rooney, localhost:4000/user로부터 시작되는 ex)localhost:4000/user/userEdtail 등에 관한 Router_200210
import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    postEditProfile,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
