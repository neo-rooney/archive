import express from "express";

//by Rooney, middleware_200210
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import passport from "passport";
import "./passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import path from "path";
import flash from "express-flash";

//by Rooney, Router_200210
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import apiRouter from "./Routers/apiRouter";
import routes from "./routes";

const app = express();
const CokieStore = MongoStore(session);

//by Rooney, middleware 추가_200210
app.use(helmet());
//by Rooney, View Engin 추가_200210
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));

//by Rooney, middleware 추가_200210
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//by Rooney, seession을 관리하기 위한 middleware_200211
//by Rooney, mongoose를 사용하여 DB와 쿠키저장소를 연결하였으므로 서버를 재시작해도 로그인 상태 유지_200211
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(flash());

//by Rooney, 회원가입을 위한 middleware_200211
app.use(passport.initialize());
app.use(passport.session());

//by Rooney, Globel 변수를 사용하기 위한 middleware_200211
app.use(localsMiddleware);

//by Rooney, Router_200210
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
