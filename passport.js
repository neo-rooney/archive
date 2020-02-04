import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

//passport-local-mongoose에서 제공하는 함수 사용
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
